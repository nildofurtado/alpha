const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.createRecord = functions.https.onRequest(async (req, res) => {
        const db = admin.firestore();
        if (req.method !== 'POST') {
            return res.status(405).send('Only POST methods are allowed');
        }

        const { name } = req.body;
        if (!name) {
            return res.status(400).send('The "name" attribute is required in the request body');
        }

        const lastIdRef = db.collection('alpha').doc('last_id');
        const lastIdDoc = await lastIdRef.get();

        let newId;
        if (lastIdDoc.exists) {
            newId = lastIdDoc.data().increment_id + 1;
        } else {
            newId = 1;
            await lastIdRef.set({ increment_id: newId });
        }

        await db.collection('alpha').add({
            increment_id: newId,
            name: name,
        });

        await lastIdRef.set({ increment_id: newId });
        return res.status(200).send('Registry Created Successfully');
});

exports.updateIncrementId = functions.firestore.document('alpha/{docId}').onCreate(async (snapshot, context) => {
    const data = snapshot.data();
    const incrementId = data.incrementId;

    if (data.source === 'post') {
        await snapshot.ref.set({ increment_id: incrementId }, { merge: true });
    }
});
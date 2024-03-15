const functions = require('../index');
const admin = require('firebase-admin');
const { Firestore } = require('@google-cloud/firestore');
const {logger} = require("firebase-functions");

jest.mock('@google-cloud/firestore', () => {
    return {
        Firestore: jest.fn().mockImplementation(() => ({
            collection: jest.fn().mockReturnThis(),
            doc: jest.fn().mockReturnThis(),
            get: jest.fn().mockResolvedValue({
                exists: true,
                data: () => ({ increment_id: 1 }),
            }),
            set: jest.fn().mockReturnThis(),
            add: jest.fn().mockResolvedValue(),
        })),
    };
});


describe('createRecord function', () => {

    it('should return 405 if the Method is other than POST', async () => {
        const req = { method: 'GET', body: {} };
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        };

        await functions.createRecord(req, res);

        expect(res.status).toHaveBeenCalledWith(405);
        expect(res.send).toHaveBeenCalledWith('Only POST methods are allowed');
    });

    it('should return 400 if "name" attribute is missing', async () => {
        const req = { method: 'POST', body: {} };
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        };

        await functions.createRecord(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith('The "name" attribute is required in the request body');
    });

    it('should create a record with increment_id', async () => {
            const req = { method: 'POST', body: { name: 'Test Name' } };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn(),
            };
            await functions.createRecord(req, res);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.send).toHaveBeenCalledWith('Registry Created Successfully');

    });

});

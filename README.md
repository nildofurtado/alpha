# Introdução
Esta documentação destina-se a fornecer informações sobre o teste a ser realizado na aplicação "Projeto-Alpha" . O objetivo do teste é garantir que a função Firebase criada atenda aos requisitos especificados e funcione conforme o esperado.

## Propósito do Teste
O teste tem como propósito principal verificar se a função Firebase é capaz de criar um novo registro em uma coleção do Firestore e definir o atributo increment_id de forma adequada. Além disso, busca-se validar a integridade e o funcionamento correto da função em diferentes cenários de uso.

## Objetivo:

Verificar se a função Firebase cria corretamente um novo registro na coleção do Firestore.
Validar se os dados fornecidos no corpo da solicitação HTTP são corretamente inseridos no documento criado.

### Definição de increment_id:

Garantir que o atributo increment_id seja atribuído ao novo registro de acordo com a lógica especificada.
Verificar se o próximo valor disponível para increment_id é atribuído corretamente ao novo registro.

### Cenários Especiais:

Testar casos em que a coleção está vazia e quando já existem registros presentes.
Avaliar o comportamento da função em situações de concorrência e carga.
Procedimento de Teste

# Preparação do Ambiente:

Certifique-se de ter acesso ao projeto Firebase configurado para executar as funções e utilizar o Firestore.

Instale as dependências necessárias e configure o ambiente conforme instruções fornecidas.

## Instalação Nodejs via NVM.

### windows

#### :warning:
> A NVM foi projetada para ser instalada por usuário e invocada por shell

```bash
https://github.com/coreybutler/nvm-windows/releases/download/1.1.12/nvm-setup.exe
```
* Baixe o arquivo nvm-setup.zip para obter a versão mais recente.
* Depois de baixado, abra o arquivo zip e abra o arquivo nvm-setup.exe.
* O assistente de instalação Setup-NVM-for-Windows guiará você pelas etapas de instalação, incluindo a escolha do diretório onde NVM-Windows e Node.js serão instalados.

![alt text](https://learn.microsoft.com/pt-br/windows/images/install-nvm-for-windows-wizard.png)

* Quando a instalação for concluída. Abra o PowerShell (é recomendável abrir com permissões de Administrador com privilégios elevados) e tente usar windows-nvm para listar quais versões do Node estão instaladas no momento (não deve haver nenhuma neste momento): nvm ls


![alt text](https://learn.microsoft.com/pt-br/windows/images/windows-nvm-powershell-no-node.png)


* Instale a versão atual do Node.js (para testar os aprimoramentos dos recursos mais recentes, mas com mais probabilidade de ter problemas do que a versão LTS): nvm install latest

![alt text](https://learn.microsoft.com/pt-br/windows/images/windows-nvm-list.png)


### Linux

* Instalação NVM (automatic).
```bash
 $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```
* Teste NVM

```bash
  $ nvm -v
```
* Instalação Node.JS

```bash
  nvm install latest
```

* Teste seu NODEJS instalado no linux.
```bash
  $ node -v
```


## Passo a Passo para Iniciar um Projeto Firebase Function e Emulador do Github

### 1. Clonar o Repositório:
```
git clone https://github.com/nildofurtado/projeto-alpha.git
```
### 2. Instalar as Dependências:
```
npm install
```
### 3. Configurar o Firebase CLI::
### 3.1. Instalação do Firebase CLI:

Para instalar o Firebase CLI globalmente, execute o seguinte comando:

```bash
npm install -g firebase-tools
```

### 2. Inicie o emulador do Firebase:
```bash
firebase emulators:start
```
### 3.Acesse o URL do emulador em seu navegador:
```bash
http://localhost:4000 ou http://localhost:5001
```

Você verá a interface do emulador do Firebase, onde você pode gerenciar seus projetos, bancos de dados e outras configurações.

### 3.Acesse o URL do emulador em seu navegador:
```bash
http://localhost:4000 ou http://localhost:5001
```
## Testes Unitários
Neste projeto, implementamos testes unitários abrangentes para garantir a qualidade e a confiabilidade do código. Os testes unitários são escritos usando o framework Jest. Esses testes desempenham um papel fundamental em nossa abordagem de desenvolvimento, garantindo que nosso software seja robusto e estável em todas as circunstâncias.

```bash
npm install --save-dev jest
npm install --save-dev supertest

/caminho/pasta/functions/jest
```

### Recursos Adicionais:

+ Documentação do Firebase: https://firebase.google.com/docs
+ Tutoriais do Firebase: https://www.tutorialspoint.com/firebase/index.htm
+ Vídeos do Firebase: https://www.youtube.com/user/firebase

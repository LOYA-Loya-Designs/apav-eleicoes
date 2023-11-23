const adminPermissions = require("../db/adminPermissions.js")
const md5 = require('md5');

const admin = adminPermissions()
const auth = admin.auth()

const jsonData = require("../utils/users.json");
const db = admin.firestore();
const collectionRef = db.collection('users');

const hash = "1eda869877af32aabcb69fbbcf2c6976d0e4a20d"

jsonData.forEach(async (data) => {
    const id = data.numSocio.toString()
    const numSocio = data.numSocio
    const name = data.name
    const password = generatePass(id)

    data.password = password

    console.log(id)
    collectionRef.doc(id).set(data);

    const email = id + "@mail.pt"
    try {
        const userRecord = await auth.createUser({
            email: email,
            password: password,
            name: name,
            numSocio: numSocio,
        });
        console.log(`Conta de autenticação criada para ${userRecord.displayName} (${userRecord.email})`);
    } catch (error) {
        console.error(`Erro ao criar conta de autenticação: ${error}`);
    }
});

function generatePass(id) {
    const password = md5(id + hash).substring(0, 6);
    return password;
}

console.log('Dados inseridos com sucesso!');
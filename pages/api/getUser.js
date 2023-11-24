const adminPermissions = require("../../db/adminPermissions")
const admin = adminPermissions()
const db = admin.firestore();

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    const { email } = req.query;

    if (!email) {
        return res.status(400).json({ error: 'O parâmetro de e-mail é obrigatório.' });
    }

    try {
        let split = email.split("@");
        let numSocio = split[0];
        const userRef = db.collection('users').doc(numSocio);
        const userDoc = await userRef.get();

        if (userDoc.exists) {
            const userData = userDoc.data();
            return res.status(200).json(userData);
        } else {
            return res.status(404).json({ error: 'Documento não encontrado.' });
        }
    } catch (error) {
        console.error('Erro ao buscar usuário na base de dados:', error);
        return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
}

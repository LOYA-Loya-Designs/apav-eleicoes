const adminPermissions = require("../../db/adminPermissions")
const admin = adminPermissions()
const db = admin.firestore();

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    try {
        const optionsCollection = db.collection('options');
        const snapshot = await optionsCollection.get();

        const optionDataArray = [];
        snapshot.forEach(doc => {
            const optionData = doc.data();
            optionDataArray.push(optionData);
        });

        return res.status(200).json(optionDataArray);
    } catch (error) {
        console.error('Erro ao buscar options na base de dados:', error);
        return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
}
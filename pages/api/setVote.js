const adminPermissions = require("../../db/adminPermissions");
const admin = adminPermissions();
const db = admin.firestore();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { documentName, option } = req.body;

        if (!documentName || !option) {
            return res.status(400).json(req.body);
        }

        try {
            const statRef = db.collection("stats").doc(documentName);

            // Incrementa o campo especificado
            await statRef.update({
                [option]: admin.firestore.FieldValue.increment(1)
            });

            return res.status(200).json({ message: `Campo ${option} incrementado com sucesso.` });
        } catch (error) {
            console.error(`Erro ao incrementar campo ${option} no documento ${documentName} na coleção stats:`, error);
            return res.status(500).json({ error: 'Erro interno do servidor.' });
        }
    } else {
        return res.status(405).end();
    }
}
const adminPermissions = require("../../db/adminPermissions");
const admin = adminPermissions();
const db = admin.firestore();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { numSocio, status } = req.body;

        if (!numSocio || !status) {
            return res.status(400).json(req.body);
        }

        try {
            const userRef = db.collection('users').doc(numSocio);

            // Atualiza o documento com o novo campo "status"
            await userRef.update({ status: Number(status) });

            return res.status(200).json({ message: 'Campo "status" adicionado com sucesso.' });
        } catch (error) {
            console.error('Erro ao adicionar campo "status" ao usuário na base de dados:', error);
            return res.status(500).json({ error: 'Erro interno do servidor.' });
        }
    } else {
        return res.status(405).end();
    }
}

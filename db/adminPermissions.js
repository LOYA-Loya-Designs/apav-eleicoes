const admin = require("firebase-admin");
var serviceAccount = require("../db/eleicoes-apav2023-firebase-adminsdk-28z73-ed1fce19fb.json");

try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        projectId: "eleicoes-apav2023",
    });
} catch (error) {
    console.error("error intializing app (admin):", error);
}

let adminPermissions = admin;

const getAdminPermissions = () => {
    return adminPermissions;
};

module.exports = getAdminPermissions;

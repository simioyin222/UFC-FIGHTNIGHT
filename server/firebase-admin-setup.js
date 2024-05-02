const admin = require("firebase-admin");
const serviceAccount = require("../bui1d/ufceventplanner-firebase-adminsdk-9zcey-0c1e24b95f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;  // Export for use in other files
const admin = require('./firebase-admin-setup');

module.exports = function(app) {
    app.post('/send-notification', (req, res) => {
        const { token, title, body } = req.body;
        const message = {
            notification: {
                title,
                body
            },
            token
        };

        admin.messaging().send(message)
            .then(response => res.status(200).json({ success: true, response }))
            .catch(error => {
                console.error('Error sending notification:', error);
                res.status(500).json({ success: false, error: error.message });
        });
    });
};
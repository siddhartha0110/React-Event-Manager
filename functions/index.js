const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase Cloud Functions!");
});

const createNotification = (notification => {
    return admin.firestore().collection('notifications').add(notification)
        .then(doc => console.log('notification added', doc));
})

exports.eventCreated = functions.firestore.document('events/{eventId}').onCreate(doc => {
    const event = doc.data();
    const notification = {
        content: 'New Event Created',
        user: `${event.authorFirstName} ${event.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    };
    return createNotification(notification);
})

exports.userJoined = functions.firestore.document("users/{userId}")
    .onCreate(doc => {
        const user = doc.data();
        const notification = {
            content: "Joined the party",
            user: `${user.firstName} ${user.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        };
        return createNotification(notification);
    });
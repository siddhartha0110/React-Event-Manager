export const createEvent = (event) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('events').add({
            ...event,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()

        }).then(() => {
            dispatch({ type: 'CREATE_EVENT', payload: event });
        }).catch(err => {
            dispatch({ type: 'CREATE_EVENT_ERROR', payload: err })
        })

    }
};
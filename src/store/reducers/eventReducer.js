const initialState = {
    events: [
        { id: '1', title: 'Imagine Dragons Concert', content: 'Come and witness the Imagine Dragons on 31st October 2020 in the Metallica Arena,NY' },
        { id: '2', title: 'SpaceX StarLink Delivery #5', content: 'Watch SpaceX launch 30 more satellites into the orbit' },
        { id: '3', title: 'Pubg Tournament South Asia Prelims', content: 'Contest for a price of $100,000 among 2000 participants in the South Asia Region' }

    ]
}

const eventReducer = (state = initialState, action) => {

    return state;
}

export default eventReducer;
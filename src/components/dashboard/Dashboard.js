import React, { Component } from 'react'
import Notifications from './Notifications';
import EventList from '../events/EventList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
    render() {
        const { events } = this.props;
        return (
            <div className='dashboard container'>
                <div className="row">
                    <div className="col s12 m6">
                        <EventList events={events} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.firestore.ordered.events
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'events' }
    ])
)(Dashboard);

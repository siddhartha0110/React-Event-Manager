import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import ContentLoader from 'react-content-loader';

const EventDetails = (props) => {
    if (!props.event) {
        return (
            <div className="container center">
                <ContentLoader
                    height={140}
                    speed={0.8}
                    backgroundColor={'grey'}
                    foregroundColor={'black'}
                    viewBox="0 0 380 70"
                >
                    {/* Only SVG shapes */}
                    <rect x="0" y="10" rx="5" ry="5" width="70" height="70" />
                    <rect x="100" y="17" rx="4" ry="4" width="700" height="10" />
                    <rect x="100" y="40" rx="3" ry="3" width="700" height="10" />
                    <rect x="100" y="60" rx="3" ry="3" width="700" height="10" />

                </ContentLoader>;
            </div>
        )
    }
    else {
        return (
            <div className="container section event-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">
                            {props.event.title}
                        </span>
                        <p>{props.event.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted By {props.event.authorFirstName} {props.event.authorLastName} </div>
                        <div>18th June, 2020</div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const events = state.firestore.data.events;
    const event = events ? events[id] : null
    return {
        event: event
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => [
        { 'collection': 'events', doc: props.match.params.id }
    ])
)(EventDetails);

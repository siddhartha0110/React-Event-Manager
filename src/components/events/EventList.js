import React from 'react'
import EventSummary from './EventSummary'
import { Link } from 'react-router-dom'
import ContentLoader from 'react-content-loader';

const EventList = ({ events }) => {

    if (!events) {
        return <ContentLoader
            height={140}
            speed={0.8}
            backgroundColor={'grey'}
            foregroundColor={'black'}
            viewBox="0 0 380 70"
        >
            {/* Only SVG shapes */}
            <rect x="0" y="17" rx="5" ry="5" width="40" height="40" />
            <rect x="50" y="18" rx="4" ry="4" width="150" height="10" />
            <rect x="50" y="40" rx="3" ry="3" width="150" height="10" />

        </ContentLoader>;
    }

    return (
        <div className='event-list section'>
            {events && events.map(event => {
                return (
                    <Link to={"/event/" + event.id} key={event.id}>
                        <EventSummary event={event} key={event.id} />
                    </Link>
                )
            })}
        </div>
    )
}

export default EventList

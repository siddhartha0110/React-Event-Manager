import React from 'react'
import moment from 'moment';
const Notifications = (props) => {
    const { notifications } = props;
    return (
        <div className="section">
            <div className="card ">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notifications">
                        {notifications && notifications.map(notification => {
                            return (
                                <li key={notification.id}>
                                    <span className="brown-text">{notification.user}</span>
                                    <br />
                                    <span>{notification.content}</span>
                                    <div className="grey-text note-date">
                                        {moment(notification.time.toDate()).fromNow()}
                                    </div>
                                    <hr />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications;

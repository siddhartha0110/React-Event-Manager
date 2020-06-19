import React from 'react'

const EventDetails = (props) => {
    const id = props.match.params.id;
    console.log(id);
    return (
        <div className="container section event-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        {id} - Event Title
                        </span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae nam quia similique, laudantium dolores, minima quam rerum eos distinctio accusantium vero necessitatibus blanditiis eius harum cum eum modi deleniti. Ea!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By The Anonymous IJ</div>
                    <div>18th June, 2020</div>
                </div>
            </div>
        </div>
    )
}

export default EventDetails;

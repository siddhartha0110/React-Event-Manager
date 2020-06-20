import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createEvent } from '../../store/actions/eventActions';
class CreateEvent extends Component {

    state = {
        title: '',
        content: ''
    }

    submitFormHandler = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createEvent(this.state);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.submitFormHandler} >
                    <h5 className="grey-text text-darken-3">Add Your Event</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Description</label>
                        <textarea name="content" id="content" className='materialize-textarea' onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create Event</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createEvent: (event) => dispatch(createEvent(event))
    }
}

export default connect(null, mapDispatchToProps)(CreateEvent);

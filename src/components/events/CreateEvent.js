import React, { Component } from 'react'

class CreateEvent extends Component {

    state = {
        title: '',
        content: ''
    }

    submitFormHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
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

export default CreateEvent;

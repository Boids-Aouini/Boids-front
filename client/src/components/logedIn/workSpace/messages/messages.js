import React, { Component } from 'react'

export default class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            channel_id: null
        }
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="message" ></input>
                    <button type="submit">send</button>
                </form>
            </div>
        )
    }
}

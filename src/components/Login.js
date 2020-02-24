import React, { Component } from 'react'
import history from '../history'
import Modal from './Modal'

export default class Login extends Component {
    render() {
        return (
            <Modal
                title="Login"
                content="Insert credentials"
                actions="buttons"
                onDismiss={() => history.push('/')}
            />
        )
    }
}

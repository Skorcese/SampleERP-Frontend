import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {
    state = {
        Towary: false,
        Kontrahenci: false,
        Dokumenty: false
    }

    toggleActive = (e) => {
        const name = e.target.textContent
        const currentState = this.state[name]

        this.setState({
            Towary: false,
            Kontrahenci: false,
            Dokumenty: false
        })

        this.setState({ [name]: !currentState })
    }

    className(text){
        return `${this.state[text] ? 'active ' : ''}item`
    }

    render() {
        return (
            <div className="ui vertical fluid tabular menu">
                <Link
                    to="/twr" 
                    onClick={this.toggleActive}
                    className={this.className('Towary')}
                >Towary</Link>
                <Link
                    to="/knt"
                    onClick={this.toggleActive}
                    className={this.className('Kontrahenci')}
                >Kontrahenci</Link>
                <Link
                    to="/dok"
                    onClick={this.toggleActive}
                    className={this.className('Dokumenty')}
                >Dokumenty</Link>
            </div>
        )
    }
}

export default Menu
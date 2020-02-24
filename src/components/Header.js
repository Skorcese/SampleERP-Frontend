import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className="ui segment" style={{ marginTop: '10px' }}>
                <Link to="/" >
                    <i className="cog icon" style={{ fontSize: '30px' }}/>
                    <span style={{ fontSize: '30px', marginLeft: '-5px' }}>Sample</span>
                    <span style={{ fontWeight: 'bold' }}>ERP</span>
                </Link>
                <Link to='/login' className="ui right floated header primary button">
                    Zaloguj
                </Link>
            </div>
        )
    }
}

export default Header
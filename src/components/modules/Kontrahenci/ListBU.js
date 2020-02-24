import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { buFetchAll } from '../../../actions'

class ListBU extends Component {
    componentDidMount(){
        this.props.buFetchAll();
    }

    renderList(){
        return this.props.businessUnits ? 
            this.props.businessUnits.map(bu => {
                return (
                    <div className="item" key={bu._id}>
                        <i className="large middle aligned icon address card" />
                        <div className="content">
                            <Link to={`/twr/${bu._id}`} className="header">
                                {bu.bu_code}
                            </Link>
                            <div className="description">
                                {bu.bu_name}
                            </div>
                        </div>
                    </div>
                )
            })
            : <React.Fragment>
                <h3>Lista jest pusta</h3>
                <p>Dodaj kontrahenta powyżej, aby pojawił się na liście.</p>
            </React.Fragment>
    }

    render() {
        if(!this.props.businessUnits){
            return <div>Ładowanie...</div>
        }
        
        return (
            <div>
                <h3>Lista kontrahentów</h3>
                <div className="ui segment">
                    <Link to="/knt/new" className="ui button">+ Dodaj +</Link>
                </div>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        businessUnits: state.businessUnits
    }
}

export default connect(mapStateToProps, { buFetchAll })(ListBU)
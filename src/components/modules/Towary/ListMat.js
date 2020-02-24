import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { matFetchAll, matTypeFetchAll, matUnitFetchAll } from '../../../actions'

class ListMat extends Component {
    componentDidMount(){
        this.props.matFetchAll();
        this.props.matUnitFetchAll()
        this.props.matTypeFetchAll()
    }

    renderList(){
        return this.props.materials ? 
            this.props.materials.map(material => {
                return (
                    <div className="item" key={material._id}>
                        <i className="large middle aligned icon cog" />
                        <div className="content">
                            <Link to={`/twr/${material._id}`} className="header">
                                {material.mat_code}
                            </Link>
                            <div className="description">
                                {material.mat_name}
                            </div>
                        </div>
                    </div>
                )
            })
            : <React.Fragment>
                <h3>Lista jest pusta</h3>
                <p>Dodaj towar powyżej, aby pojawił się na liście.</p>
            </React.Fragment>
    }

    render() {
        if(!this.props.materials){
            return <div>Ładowanie...</div>
        }
        
        return (
            <div>
                <h3>Lista towarów</h3>
                <div className="ui segment">
                    <Link to="/twr/new" className="ui button">+ Dodaj +</Link>
                    <Link to="/twr/stan" className="ui button">Stany towarowe</Link>
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
        materials: state.materials,
        materials_unit: state.materials_unit,
        materials_type: state.materials_type
    }
}

export default connect(mapStateToProps, { matFetchAll, matTypeFetchAll, matUnitFetchAll })(ListMat)
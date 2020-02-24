import React, { Component } from 'react'
import { connect } from 'react-redux'
import { matFetch, matDelete } from '../../../actions'

class DetailsMat extends Component {
    componentDidMount(){
        this.props.matFetch(this.props.match.params.id)
    }

    render() {
        debugger;
        // if(!this.props.materials) {
        //     return <div>Ładowanie...</div>
        // }
        if(!this.props.materials.find(() => this.props.match.params.id)){
            return <div>Ładowanie...</div>
        }
        else {
            const {
                mat_code,
                mat_name,
                mat_type,
                mat_unit
            } = this.props.materials.find(() => this.props.match.params.id);

            const { mat_type_description } = mat_type;
            const { mat_unit_code } = mat_unit;
            
            return (
                <div>
                    <h3>Karta towaru</h3>
                    <h1>{mat_code}</h1>
                    <h1>{mat_name}</h1>
                    <h1>{mat_type_description}</h1>
                    <h1>{mat_unit_code}</h1>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        materials: state.materials
    }
}

export default connect(mapStateToProps, { matFetch, matDelete })(DetailsMat)
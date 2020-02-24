import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { matCreate, matUnitFetchAll, matTypeFetchAll } from '../../../actions'
import { connect } from 'react-redux'

class CreateMat extends React.Component{
    componentDidMount(){
        // this.props.matUnitFetchAll()
        // this.props.matTypeFetchAll()
    }

    renderError({ error, touched }){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input { ...input } autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }
    
    renderSelect = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <select { ...input } className="ui fluid dropdown">
                    {this.renderSelectOptions(label)}
                </select>
                {this.renderError(meta)}
            </div>
        )
    }
    
    renderSelectOptions = mode => {
        if(this.props.materials_type && this.props.materials_unit){
            switch (mode){
                case 'Typ':
                    return (
                        <React.Fragment>
                            <option value="">---</option>
                            {
                                this.props.materials_type.map(type => {
                                    return (
                                        <option key={type._id} value={type.mat_type_description}>{type.mat_type_description}</option>
                                        )
                                    })
                                }
                        </React.Fragment>
                    )
                    
                case 'Jednostka miary':
                    return (
                        <React.Fragment>
                        <option value="">---</option>
                        {
                            this.props.materials_unit.map(unit => {
                                return (
                                    <option key={unit._id} value={unit.mat_unit_code}>{unit.mat_unit_code}</option>
                                    )
                                })
                            }
                    </React.Fragment>
                )
                
                default:
                    return mode
            }
        } else return <option>---</option>
    }
    
    onSubmit = (formValues) => {
        console.log(formValues)
        // this.props.onSubmit(formValues)
        this.props.matCreate(formValues)
    }
    
    render(){
        return (
            <React.Fragment>
                <h3>Nowy towar</h3>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field name="mat_code" component={this.renderInput} label="Kod" />
                    <Field name="mat_name" component={this.renderInput} label="Nazwa" />
                    <div className="two fields">
                        <Field name="mat_type" component={this.renderSelect} label="Typ" />
                        <Field name="mat_unit" component={this.renderSelect} label="Jednostka miary" />
                    </div>
                    <button className="ui button primary">Zapisz</button>
                </form>
            </React.Fragment>
        )
    }
}

const validate = (formValues) => {
    const errors = {}
    
    if(!formValues.mat_code){
        errors.code = 'Kod nie może być pusty'
    }
    
    if(!formValues.mat_name){
        errors.name = 'Nazwa nie może być pusta'
    }

    if (!formValues.mat_type){
        errors.type = 'Pole wymagane'
    }

    if (!formValues.mat_unit){
        errors.unit = 'Pole wymagane'
    }

    return errors
}

const mapStateToProps = state => {
    // console.log(this.props)
    return {
        materials_unit: state.materials_unit,
        materials_type: Object.values(state.materials_type)

    }
}

const componentWrapped = reduxForm({
    form: 'CreateMat',
    validate
})(CreateMat) 

export default connect(mapStateToProps, {
    matCreate,
    matUnitFetchAll,
    matTypeFetchAll
})(componentWrapped)
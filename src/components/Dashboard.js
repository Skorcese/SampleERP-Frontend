import React, { Component } from 'react'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h3>Mini projekt - SampleERP</h3>
                <p>
                    Chciałbym zaprezentować tutaj moją umiejętność wykorzystania technologii i narzędzi, 
                    aby zaimplementować prostą logikę biznesową przykładowej aplikacji przypominającej system 
                    ERP na podstawie mojego dotychczasowego doświadczenia zawodowego. 
                    Istnieje wiele możliwości jej rozbudowy, jednak nie będę tutaj implementował wszystkich możliwych modułów, 
                    tj. produkcja, księgowość, itd...
                </p>
                <h4>Wykorzystane narzędzia:</h4>
                <h5>Frontend</h5>
                <ul>
                    <li>React</li>
                    <li>Redux / ReduxThunk / ReduxForm</li>
                    <li>Semantic UI</li>
                    <li>Axios</li>
                </ul>
                <h5>Backend</h5>
                <ul>
                    <li>MongoDB / Mongoose</li>
                    <li>Joi</li>
                    <li>Express</li>
                </ul>
            </div>
        )
    }
}

export default Dashboard
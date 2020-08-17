import React, { Component } from 'react'
import {Cards, CountryPicker, Chart} from './components/imports'
import styles from './App.module.css'
import {fetchData} from './api/api'

export class App extends Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount(){
        const fetchedData = await fetchData()
        this.setState({data: fetchedData})
    }

    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country)
        this.setState({
            data: fetchedData,
            country: country
        })
    }

    render() {
        const {data, country} = this.state
        
        return (
            <div className={styles.container}>
                <img src={require('./img/covid19.png')} className={styles.image} alt="COVID-19
                " />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App

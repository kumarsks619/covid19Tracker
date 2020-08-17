import React, {useState, useEffect} from 'react'
import {FormControl, NativeSelect} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api/api'

function CountryPicker({handleCountryChange}) {
    const [fetchedCountries, setFetchedCountries] = useState([])

    const fetchAPI = async() => {
        const data = await fetchCountries()
        setFetchedCountries(data)
    }

    useEffect(() => {
        fetchAPI()
    }, [])


    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {
                    fetchedCountries.map((country, index) => 
                        <option key={index} value={country}>{country}</option>
                    )
                }
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker

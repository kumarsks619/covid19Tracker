import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

//function to fetch Cards data
export const fetchData = async(country) => {
    let changeableURL = url
    if(country){
        changeableURL = `${url}/countries/${country}`
    }

    try {
        //multi-level destructuring
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableURL)
        //returning an ES6 object
        return {confirmed, recovered, deaths, lastUpdate}
    } catch (error) {
        console.log(error)
    }
}

//function to fetch Graph(Chart) data
export const fetchDailyData = async() => {
    try {
        const {data} = await axios.get(`${url}/daily`)
        const reqData = (data.map((dailyData) => {
            return(
                {
                    confirmed: dailyData.confirmed.total,
                    deaths: dailyData.deaths.total,
                    date: dailyData.reportDate
                }
            )
        }))
        return reqData
    } catch (error) {
        console.log(error) 
    }
}


export const fetchCountries = async() => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`)
        const reqData = countries.map((country) => country.name)
        return reqData
    } catch (error) {
        console.log(error)
    }
}
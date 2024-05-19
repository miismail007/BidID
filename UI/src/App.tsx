import React, { useEffect, useState } from 'react'
import Form from './components/Form';
import Header from './components/Header'
import Map from './components/Map';
import SideNav from './components/SideNav'
import { getTotalCount } from './utills/helperFunctions';

function App() {
    const [ menu, setMenu ] = useState("map");
    const [ countryData, setCountryData ] = useState([])
    const getData = async () => {
        try {
            const raw = await fetch("http://localhost:3000/countries")
            const data = await raw.json()
            setCountryData(data);    
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    },[])
    return (
        <div className = 'flex flex-col'>
            <Header/>
            <div className = "flex flex-1">
                <SideNav menu = { menu } setMenu = { setMenu }/>
                {menu === 'map' ? 
                    <Map countryData = { countryData } totalCount = { getTotalCount(countryData) }/>
                    :
                    <Form countryData = { countryData } setCountryData = { setCountryData }/>
                }
            </div>
        </div>
  )
}

export default App

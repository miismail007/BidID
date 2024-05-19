import React, { useEffect, useState } from 'react'
import countries from '../utills/countries.json'
import { ApiDataType,FormType } from '../utills/types'

function Form({countryData, setCountryData} : FormType) {

    const [country, setCountry] = useState("")
    const [count, setCount] = useState(0)
    const [disabledButton, setDisabledButton] = useState(true)

    const postData = async () => {
        try {
            const countryFromState: Array<ApiDataType> = countryData.filter(singleCountry => singleCountry.name === country)
            const raw = await fetch(`http://localhost:3000/countries/${countryFromState.length > 0 ? countryFromState[0].id : ''}`,{
                method: countryFromState.length > 0 ? "PUT" : "POST",
                body: JSON.stringify(
                    countryFromState.length > 0 ? 
                        {
                            id: countryFromState[0].id,
                            name: country,
                            userCount: count
                        } 
                        : 
                        {
                            name: country,
                            userCount: count
                        }
                )
            })
            const data = await raw.json()
            if(countryFromState.length > 0){
                const newCountryData = countryData.map((singleCountry : ApiDataType) => {
                    if(singleCountry.id === countryFromState[0].id){
                        return {
                            ...singleCountry,
                            userCount: count
                        }
                    }else{
                        return singleCountry
                    }
                })
                setCountryData(newCountryData)
            }else{
                setCountryData([...countryData, data])
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        if(country !== "" && count > 0){
            setDisabledButton(false)
        }else{
            setDisabledButton(true)
        }
    },[count, country])
    return (
        <div className="flex-1 p-10 overflow-y-auto ml-20 mt-10">
            <h1 className="text-3xl font-bold text-violet-500">Add users count</h1>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
                    <div className="mt-2">
                    <select 
                        id="country" 
                        name="country" 
                        autoComplete="country-name" 
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={country}
                        onChange={(e) => {
                            setCountry(e.target.value);
                        }}
                    >
                        <option value="">Select</option>
                        {countries.countries.map((country : string) => 
                            <option 
                                key={country} 
                                value={country} 
                            >{country}</option>
                        )}
                    </select>
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">User count</label>
                    <div className="mt-2">
                        <input 
                            type="number" 
                            name="last-name" 
                            value={count} 
                            id="last-name" 
                            autoComplete="family-name" 
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(e) => {setCount(parseInt(e.target.value))}}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button 
                    type="submit" 
                    disabled={disabledButton}
                    className={`rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${ disabledButton ? 'cursor-not-allowed' : ''}`}
                    onClick={() => !disabledButton && postData()}
                >Save</button>
            </div>
        </div>
    )
}

export default Form
import React, { useState } from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps'
import { getRandomColor, getUserCount } from '../utills/helperFunctions';
import { MapType } from '../utills/types';
import worldJson from '../utills/world.json'

function Map({ countryData, totalCount } : MapType) {
    const [tooltipContent, setTooltipContent] = useState("");
    return (
        <div className="flex-1 p-10 overflow-y-auto ml-20 mt-10" data-testid="map">
            <h1 className="text-3xl font-bold text-violet-500">Welcome to BigID</h1>
            <div className="bg-white max-w-sm shadow-md rounded-lg p-6 my-5">
                <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#8b5cf6" className="w-20 h-20 bg-voilet-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
                <div className='ml-5'>
                    <p className="text-3xl font-bold" data-testid="userCount">{totalCount}</p>
                    <p className="text-gray-500">Total Users</p>
                </div>
                </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 my-5 ">
                {tooltipContent && (
                    <div className="absolute bg-white border p-2 rounded shadow-md">
                        {tooltipContent}
                    </div>
                )}
                <div className="flex items-center">
                    <ComposableMap>
                        {/* <ZoomableGroup center={[0,10]}> */}
                        <Geographies geography={worldJson}>
                            {({ geographies }) =>
                                geographies.map((geo) => {
                                const countryName = geo.properties.ADMIN;
                                const userCount = getUserCount(countryData, countryName);
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onMouseEnter={() => {
                                            setTooltipContent(`${countryName}: ${userCount} users`);
                                        }}
                                        onMouseLeave={() => {
                                            setTooltipContent("");
                                        }}
                                        style={{
                                            default: {
                                            fill: "#D6D6DA",
                                            outline: "none",
                                            stroke: "#000", // Outline color
                                            strokeWidth: 0.5,
                                            },
                                            hover: {
                                            fill: getRandomColor(),
                                            outline: "none",
                                            stroke: "#000", // Outline color
                                            strokeWidth: 1,
                                            },
                                            pressed: {
                                            fill: "#E42",
                                            outline: "none",
                                            stroke: "#000", // Outline color
                                            strokeWidth: 0.5,
                                            },
                                        }}
                                        />
                                    );
                                })
                            }
                        </Geographies>
                        {/* </ZoomableGroup> */}
                    </ComposableMap>
                </div>
            </div>
        </div>
    )
}

export default Map
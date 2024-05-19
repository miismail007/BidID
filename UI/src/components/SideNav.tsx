import React, { useEffect } from 'react'
import { SideNavType } from '../utills/types'
import world from "../utills/world.json"

function SideNav({ menu, setMenu } : SideNavType) {
  return (
    <div className="w-20 h-[calc(100vh-75px)] bg-gray-800 text-white flex flex-col items-center py-4 space-y-4 m-1 rounded-md fixed top-75 left-0 bottom-0" data-testid="sideNav">
        <p onClick={() => setMenu("map")} className={`hover:bg-violet-500 p-2 ${menu === 'map' ? 'bg-violet-500' : ''} rounded`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
            </svg>
        </p>
        <p onClick={() => setMenu("form")} className={`hover:bg-violet-500 p-2 ${menu === 'form' ? 'bg-violet-500' : ''} rounded`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5v14" />
            </svg>
        </p>
    </div>
  )
}

export default SideNav
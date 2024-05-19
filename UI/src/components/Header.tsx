import React from 'react'

function Header() {
  return (
    <header className="w-full text-white py-4 px-6 flex justify-between items-center bg-white fixed top-0" data-testid="header">
        <div className="flex items-center space-x-4">
            <img src="https://5214163.fs1.hubspotusercontent-na1.net/hubfs/5214163/horizontal-logo.png" alt="Logo" className="w-20"/>
        </div>
        <div className="flex items-center">
            <input type="text" placeholder="Search..." className="px-3 py-1 rounded-lg bg-slate-300 text-white focus:outline-none focus:bg-gray-600"/>
        </div>
    </header>
  )
}

export default Header
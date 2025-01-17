import { createRoot } from 'react-dom/client';
import React from 'react'
import App from './App';
import initializeComponent from './bigID';
let dd = initializeComponent;

declare global {
    interface Window { weekEndRoot: any; }
}

export default function mount() {
    const element = document.getElementById('bigID')
    if(element){
        const root :any =  createRoot(element!)
        window.weekEndRoot = root;
        root.render(<App/>)
    }
}
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App'
import {ThemeContextProvider} from './components/themeContext'


ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>
)
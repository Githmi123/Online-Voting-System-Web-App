import React from 'react'
import '../index.css';


export default function setBodyColor({color}) {
    document.documentElement.style.setProperty('--bodyColor', color)
}
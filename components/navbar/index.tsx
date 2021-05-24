import React from 'react'
import Styles from './navbar.module.css'

function Navbar() {
    return (
        <div id={Styles.navbar}>
            <h2>Sort Visualiazation</h2>
            <div id={Styles.navigation}>
                <span>Bubble Sort</span>
                <span>Selection Sort</span>
                <span>Insertion Sort</span>
                <span>Merge Sort</span>
                <span>Quick Sort</span>
                <span>Random Quick Sort</span>
                <span>Counting Sort</span>
                <span>Radix Sort</span>
            </div>
        </div>
    )
}

export default Navbar

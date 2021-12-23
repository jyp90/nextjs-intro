import NavBars from '../components/NavBars'
import { useState } from 'react';

export default function Home() {
    return (
        <div>
            <NavBars />
            <h1 className='active'>Home</h1>
            <style jsx>{`
            a {
                color: white;
            }
            `}
            </style>
        </div>
    )
}
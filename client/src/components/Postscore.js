import React from 'react'
import './components.css'
import {VscChevronUp} from 'react-icons/vsc'
import {VscChevronDown} from 'react-icons/vsc'

const Postscore = () => {
    return (
        <div className='score'>
            <VscChevronUp 
                style = {{cursor: 'pointer', display: 'block', margin: 'auto', width: '30px', height: '30px'}} 
            />
            <p>Score</p>
            <VscChevronDown 
                style = {{cursor: 'pointer', display: 'block', margin: 'auto', width: '30px', height: '30px'}}
            />
        </div>
    )
}

export default Postscore

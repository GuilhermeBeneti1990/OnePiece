import './Home.css'
import home_img from '../../assets/imgs/home_img.png'
import React from 'react'

import Main from '../template/Main'

export default props =>
    <Main icon="home" title="Home" subtitle="React Project - Pirate's Control">
        <div className="home_title display-4">Welcome Marine!</div>
        <hr />
        <p className="home_subtitle mb-4">System of pirates management developed with ReactJS</p>
        <div className="home_img mb-4">
            <img src={home_img} alt="Bad Ass Pic"/>
        </div>
    </Main>
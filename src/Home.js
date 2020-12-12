import React from 'react'
import './Home.css'
import Card from './Card'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className='home'>
            <div className='home__bgImage'></div>

            <div className='home__text'>
                <h1>Women Empowerent</h1>
                <p>"If you want something said, ask a man; if you want something done, ask a woman"</p>
                <p className='home__author'>~ Margaret Thatcher</p>
            </div>
            <br />

            <div className='home__cardContainer'>
                <Card title='Nearby Police Stations' description='Check out nearby police stations here.' imageSrc='https://betanews.com/wp-content/uploads/2018/08/map-locations.jpg' />

                <Card title='Blogs' description='Get all the latest news stuff here from all around the globe.' imageSrc='https://www.skilltechno.com/images/blog/women-empowerment.jpg' />

                <Card title='Discussions' description='You can find all recent activities here.' imageSrc='https://marketingloc.hiremee.co.in/cms/blog/images/how-to-ace-your-first-jobs-group-discussion-round.jpg' />
            </div>

        </div>
    )
}

export default Home

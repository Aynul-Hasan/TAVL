import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CardItem from './CardItem'
import './Card.css'

function Cards() {
    return (
        <div className='container mt-5'>
            <h1 className="text-center mb-5">Check out these EPIC Destinations!</h1>
            <div className="row ">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <CardItem
                    src='images/img-9.jpg'
                    text='Explore the hidden waterfall deep inside the Amazon jungle'
                    path='/services'
                    title='Amazon Tour'
                    btn='Explore'
                    />
                </div>
                <div className="col-lg-6">
                    <CardItem
                    src='images/img-8.jpg'
                    text='Explore the  Middle East'
                    path='/services'
                    title='Middle east tour'
                    btn='Explore'
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 dc">
                <CardItem
                    src='images/img-4.jpg'
                    text='Explore the  World'
                    path='/services'
                    title='Island'
                    btn='Explore'
                    />
                </div>
                <div className="col-lg-4 dc">
                <CardItem
                    src='images/img-4.jpg'
                    text='Explore the  World'
                    path='/services'
                    title='Island'
                    btn='Explore'
                    />
                </div>
                <div className="col-lg-4 dc">
                <CardItem
                    src='images/img-4.jpg'
                    text='Explore the  World'
                    path='/services'
                    title='Island'
                    btn='Explore'
                    />
                </div>
            </div>
        </div>
    )
}

export default Cards

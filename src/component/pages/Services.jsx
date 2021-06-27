import React from 'react'
import '../../App.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../Ser.css'
import CardItem from '../CardItem'

export default function Services(){
    return (
        <div className='services'>

                <div className="container py-5">
                    <div className="row ">
                        <div className="col-lg-4 col-md-6 mb-5">
                            <CardItem
                              src='images/img-9.jpg'
                              text='Explore the hidden waterfall deep inside the Amazon jungle'
                              path='/services'
                              title='Amazon Tour'
                              btn='Explore'
                            />
                        </div>
                        <div className="col-lg-4 col-md-6  mb-5">
                            <CardItem
                              src='images/img-9.jpg'
                              text='Explore the hidden waterfall deep inside the Amazon jungle'
                              path='/services'
                              title='Amazon Tour'
                              btn='Explore'
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5">
                            <CardItem
                              src='images/img-9.jpg'
                              text='Explore the hidden waterfall deep inside the Amazon jungle'
                              path='/services'
                              title='Amazon Tour'
                              btn='Explore'
                            />
                        </div>
                        <div className="col-lg-4 col-md-6  mb-5">
                            <CardItem 
                              src='images/img-9.jpg'
                              text='Explore the hidden waterfall deep inside the Amazon jungle'
                              path='/services'
                              title='Amazon Tour'
                              btn='Explore'
                            />
                        </div>
                        <div className="col-lg-4 col-md-6  mb-5">
                            <CardItem
                              src='images/img-9.jpg'
                              text='Explore the hidden waterfall deep inside the Amazon jungle'
                              path='/services'
                              title='Amazon Tour'
                              btn='Explore'
                            />
                        </div>
                        <div className="col-lg-4  col-md-6 mb-5 ">
                            <CardItem
                              src='images/img-9.jpg'
                              text='Explore the hidden waterfall deep inside the Amazon jungle'
                              path='/services'
                              title='Amazon Tour'
                              btn='Explore'
                            />
                        </div>
                    </div>
                </div>
           
            </div>  
           
            
       
    )
}
import React from 'react'
import '../../App.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CardItem from '../CardItem'

export default function Products(){
    return (
        <div className='products'>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-6 col-lg-4 mb-5">
                    <CardItem
                              src='images/p.jpg'
                              text='Buy SunGlasses and make you different!'
                              path='/login'
                              title='#SUNGLASS'
                              btn='Buy Now'
                            />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                    <CardItem
                              src='images/p.jpg'
                              text='Buy SunGlasses and make you different!'
                              path='/login'
                              title='#SUNGLASS'
                              btn='Buy Now'
                            />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                    <CardItem
                              src='images/p.jpg'
                              text='Buy SunGlasses and make you different!'
                              path='/login'
                              title='#SUNGLASS'
                              btn='Buy Now'
                            />
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}
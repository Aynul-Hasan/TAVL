import React from 'react'
import '../../App.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom"


export default function Login(){
    return (
        <div className='sign-up'>
            
            <div className="container text-center">
                <h4 className='text-white pt-5'>Log In</h4>
                <hr/>
                <div className="row">
                   <div className="col-lg-7 mx-auto my-auto">
                   <form>
                    <div class="form-row my-3">
                        <div class="col">
                        <input type="text" class="form-control ff " placeholder="Email"/>
                        </div>
                        <div class="col">
                        <input type="text" class="form-control ff" placeholder="Password"/>
                        </div>
                    </div>
                   
                    <button className='btn btn-outline-dark sent mt-5'>LogIn</button>
                   <p className="or">or</p>
                   <Link to='/sign-up' className='login'>SignUp</Link>
                    </form>
                   </div>
                </div>
            </div>
            
        </div>
    )
}
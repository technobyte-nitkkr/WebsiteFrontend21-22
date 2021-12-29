import React from 'react'
import "./navbar.css"
import { useEffect } from 'react';
import {Link} from 'react-router-dom'


export default function Navbar() {

    const setActive=(e)=>{
        console.log(e.target)
        const list=document.querySelectorAll('.list');
        console.log(list)
        list.forEach((item)=>{
            item.className="list"
        })
        const x=document.getElementById(e.target.id)
        console.log(x.className)
        x.className="list active"
       // e.target.className="list active"
    }



    return (
        <div className="navbar">
            <div className="navigation">
                <ul>
                    <li id="0" onClick={(e)=>{setActive(e)}} className='list active'>
                        <Link className="link" id="0" onClick={(e)=>{setActive(e)}} to="/about">
                            <span id="0" onClick={(e)=>{setActive(e)}} className='icon'>
                            <i class="fas fa-home"></i>
                            </span>
                            <span id="0" onClick={(e)=>{setActive(e)}} className='text'>About</span>
                        </Link>
                    </li>
                    <li id="1" className='list' onClick={(e)=>{setActive(e)}}>
                        <Link className="link" id="1" to="/categories" onClick={(e)=>{setActive(e)}}>
                            <span id="1" className='icon' onClick={(e)=>{setActive(e)}}>
                            <i class="fas fa-user-tag"></i>
                            </span>
                            <span id="1" className='text' onClick={(e)=>{setActive(e)}}>Categories</span>
                        </Link>
                    </li>
                    <li id="2" onClick={(e)=>{setActive(e)}} className='list'>
                        <Link className="link" id="2" onClick={(e)=>{setActive(e)}} to="/contact">
                            <span id="2" onClick={(e)=>{setActive(e)}} className='icon'>
                                <i class="far fa-address-book"></i>
                            </span>
                            <span id="2" onClick={(e)=>{setActive(e)}} className='text'>contact</span>
                        </Link>
                    </li>
                    <li id="3" onClick={(e)=>{setActive(e)}} className='list'>
                        <Link className="link" id="3" onClick={(e)=>{setActive(e)}} to="/guest-Lecture">
                            <span id="3" onClick={(e)=>{setActive(e)}} className='icon'>
                            <i class="fas fa-user-tag"></i>
                            </span>
                            <span id="3" onClick={(e)=>{setActive(e)}} className='text'>guest Lecture</span>
                        </Link>
                    </li>
                    <li id="4" onClick={(e)=>{setActive(e)}} className='list'>
                        <Link className="link" id="4" onClick={(e)=>{setActive(e)}} to="/sponsors">
                            <span id="4" onClick={(e)=>{setActive(e)}} className='icon'>
                            <i class="fas fa-user-tag"></i>
                            </span>
                            <span id="4" onClick={(e)=>{setActive(e)}} className='text'>Sponsors</span>
                        </Link>
                    </li>
                    <li id="5" onClick={(e)=>{setActive(e)}} className='list'>
                        <Link className="link" id="5" onClick={(e)=>{setActive(e)}} to="/testmonials">
                            <span id="5" onClick={(e)=>{setActive(e)}} className='icon'>
                            <i class="fas fa-user-tag"></i>
                            </span>
                            <span id="5" onClick={(e)=>{setActive(e)}} className='text'>Testmonials</span>
                        </Link>
                    </li>
                    <li id="6" onClick={(e)=>{setActive(e)}} className='list'>
                        <Link className="link" id="6" onClick={(e)=>{setActive(e)}} to="/developers">
                            <span id="6" onClick={(e)=>{setActive(e)}} className='icon'>
                            <i class="fas fa-user-tag"></i>
                            </span>
                            <span id="6" onClick={(e)=>{setActive(e)}} className='text'>Devs</span>
                        </Link>
                    </li>

                    <div className="indicator"></div>
                </ul>
            </div>
        </div>
    )
}

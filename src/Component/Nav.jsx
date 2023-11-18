import React from 'react'
import css from '../Css/nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <div className='fixed-nav'>
                <ul className='menu'>              
                        <li id="Mei"><link to="/" />Mei Console<br/>Gaming for player</li>
                        <li id='menucha'>
                            <Link to="/" className="homemenu">Home</Link>   
                            <ul className="drop">
                                    <Link to="#">Products</Link>
                                    <Link to="#">Custom build</Link>
                                    <Link to="#">Guide</Link>
                            </ul>                                                                              
                        </li>                      
                        <li><Link to="/Product">Product</Link></li>
                        <li><Link to="/News">News</Link></li>
                        <li><Link to="/About">About</Link></li>                                    
                    <div className='search-container'>
                        <form id='search'>
                            <input type="text" placeholder="Search.." name="search" />
                            <button type="submit"><i className="fa fa-search" /></button>
                        </form>
                    </div>    
                </ul>                                      
            </div>
            <div className='IMG'>
                <div className='imgmenu'>
                    {/* <img src={require('../img/Menu-graphiccard.jpg')} /> */}
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="animate"> MEI CONSOLE <br/></h3>
                            <h2 className="animate2"> Gear for players</h2>
                        </div>                       
                    </div>
                </div>
            </div>    
            <div id='advbar'>
                <div id='advbar1'>
                    <i className="fa-solid fa-gamepad fa-fade" style={{color: '#b9a2a2'}} />
                    <p id='fontbar1'>#1 For Gaming</p>
                </div>
                <div id='advbar2'>
                    <i className="fa-solid fa-shield-halved fa-fade" style={{color: '#e651e1'}} />
                    <p id='fontbar2'>#1 For Warranty</p>
                </div>
                <div id='advbar3'>
                    <i className="fa-solid fa-money-bill-1-wave fa-fade" style={{color: '#8ebd7a'}} />
                    <p id='fontbar3'>#1 For Value</p>
                </div>
            </div>     
            <div id='showcase'>

            </div>    
        </div>
        
    )
}
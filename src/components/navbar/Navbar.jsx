import React, { useState } from 'react'
import "./navbar.scss"
import {Link} from "react-router-dom"

function Navbar() {
    const [open, setOpen] = useState(false)
    const currentUser={
        id:1,
        username:"metenar",
    }
  return (
    <div className='Navbar'>
        <div className="container">
            <div className="logo">
                <Link className='link' to="/">
                    <span className="text">NarTech.</span>
                </Link>
                <span className="info">Food</span>
            </div>
            <div className="searchBar">
                <div className="searchInput">
                    <img src="../img/search.png" alt="" className="icon" />
                    <input type="text" placeholder='Search a receipe' />
                </div>
                <button className="searchbtn">Search</button>
            </div>
            <div className="links">
                <Link className="link" to="/categories">Tarifler</Link>
                <Link className="link" to="/addrecipe">Tarif Gonder</Link>
                {!currentUser &&(<>
                    <Link className="link">Sign in</Link>
                    <button className="register">Join</button>
                </>)}
                {currentUser &&(
                    <div className="user" onClick={()=>setOpen(!open)}>
                        <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="userimage" />
                        <span className="userinfo">{currentUser?.username}</span>
                        {open &&(
                            <div className="options">
                                <Link to="/tarifdefteri" className="link">Tarif Defterim</Link>
                                <span>Logout</span>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Navbar
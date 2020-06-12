import React from 'react'
import { Link } from 'react-router-dom'

const Header=()=>{

    const Style={
        display: 'inline-block',
        margin :10,
        marginBottom :30

    }

    return(
        <div>
            <h3 style={Style}><Link to='/'>Home</Link></h3>
            <h3 style={Style}><Link to='/Jokes'>Jokes</Link></h3>
            <h3 style={Style}><Link to='/music-master'>Music Master</Link></h3>        </div>
    )
}
export default Header
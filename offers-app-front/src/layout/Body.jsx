import React from 'react'
import Offers from '../components/Offers'
import Profile from '../components/Profile'

export default function Body() {

    const subTitle = "Offres"

    return (
        <div>
            <Profile />
            <Offers subTitle = {subTitle}/>
        </div>
        
    )
}

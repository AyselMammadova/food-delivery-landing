'use client';
import React, { useState } from 'react'
import Header from './Header'
import MobileHeader from './MobileHeader'

const ResponsiveHeader = () => {
    const [showNav, setShowNav] = useState(false);

    const openNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);

    return (
        <div>
            <Header openNav={openNavHandler} />
            <MobileHeader showNav={showNav} closeNav={closeNavHandler} />
        </div>
    )
}

export default ResponsiveHeader
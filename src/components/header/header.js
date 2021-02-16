import React, { useEffect, useState } from 'react';
import { useTransition, animated, config } from 'react-spring'
import './header.css'

const slides = [
    { id: 0, url: 'Portada1.jpg' },    
    { id: 1, url: 'Portada4.jpg' },
    { id: 2, url: 'Portada5.jpg' }
]

const Header = () => {
    
    const [index, set] = useState(0)
    const transitions = useTransition(slides[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { display: 'none' },
        config: config.molasses,
    })
    
   useEffect(() => void setInterval(() => set(state => (state + 1) % 3), 4000), [])

    return transitions.map(({ item, props, key }) => (
        <animated.div
            key={key}
            className="header"
            style={{ ...props, backgroundImage: 'url(' + process.env.PUBLIC_URL + `/images/header/${item.url})` }}
        />
    ))
}

export default Header;
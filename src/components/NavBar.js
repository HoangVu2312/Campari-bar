import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import  styled  from 'styled-components'


const NavContainer = styled(motion.div)`
width:100vw;
z-index: 6;
position: absolute;
top: ${props => props.click ? '0' : `-${props.theme.navHeight}`};
transition: all 0.3s ease;

display: flex;
justify-content: center;
align-items: center;

@media (max-width: 40em) {
    top: ${props => props.click ? '0' : `-57vh`} ;
}

`

const MenuItems = styled.ul`
position:relative;
height: ${props => props.theme.navHeight};
background-color:  ${props => props.theme.body};
color: ${props => props.theme.text};
list-style: none;

display: flex;
justify-content: space-around;
align-items: center;

width: 100%;
padding: 0 10rem;

@media (max-width: 40em) {
    flex-direction: column;
    padding: 2rem 0;
    height: 50vh;
}

`

const MenuBtn = styled.li`
background-color: ${props => `rgba(${props.theme.textRgba}, 0.7)`};
list-style-type: style none;
color: ${props => props.theme.body};
width: 15rem;
height: 2.5rem;

clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);

position: absolute;
top: 100%;
left: 50%;
transform: translateX(-50%);

display: flex;
justify-content: center;
align-items: center;

font-size: ${props => props.theme.fontmd};
font-weight: 600;
cursor: pointer;

@media (max-width: 40em) {
    width: 10rem;
    height: 2rem;
}

`

const MenuItem = styled(motion.li)`
text-transform: uppercase;
color: ${props => props.theme.text};
cursor: pointer;

@media (max-width: 40em) {
    flex-direction: column;
    padding: 0.5rem 0;
}

`


const NavBar = () => {
    const [click, setClick] = useState(false);

    // navigate to sections
    const {scroll} = useLocomotiveScroll();

    const handleScroll = (id) => {
        setClick(!click)
        let elem = document.querySelector(id);

        scroll.scrollTo(elem,
            {
                offset: '-100',
                duration: '2000',
                easing: [0.25,0.0,0.35,1.0 ]
            }
            )
    }

  return (
    // add a prop click to navbar
    <NavContainer click={click}
    initial={{
        y:'-100%'
    }}
    animate={{
        y:0
    }}
    transition={{
        duration:2,
        delay:4
    }}
    > 
        <MenuItems>
        <MenuBtn onClick={() => setClick(!click)} >MENU</MenuBtn>
        <MenuItem onClick={() => handleScroll('#home')} whileHover={{scale:1.1, y: -5}} whileTap={{scale:0.9, y: 0}}>Home</MenuItem>
        <MenuItem onClick={() => handleScroll('.about')} whileHover={{scale:1.1, y: -5}} whileTap={{scale:0.9, y: 0}}>About</MenuItem>
        <MenuItem onClick={() => handleScroll('#shop')} whileHover={{scale:1.1, y: -5}} whileTap={{scale:0.9, y: 0}}>Menu</MenuItem>
        <MenuItem onClick={() => handleScroll('#newArrival')} whileHover={{scale:1.1, y: -5}} whileTap={{scale:0.9, y: 0}}>Our Team</MenuItem>
        </MenuItems>
    </NavContainer>
  )
}

export default NavBar
import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components'
import {motion} from "framer-motion"

const Container = styled.div `
position: absolute;
top: 1rem;
left: 1rem;

width: 100%;
color: ${props => props.theme.text};
z-index: 5;


a {
    display:flex;
    align-items: flex-end;
}

svg{
    width: 4rem;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    g{
        path{
            stroke: ${props => props.theme.text}
        }
    }
}

@media (max-width: 40em) {
  display: none;
}

`

const Text = styled.span`
font-size: ${props => props.theme.fontlg};
color:${props => props.theme.text};
padding-bottom: 0.5rem;
`


const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="48px"
          viewBox="-63 65 128 128"
          width="48px"
          
        >
          <g>
            
          </g>
          <g>
            <motion.path
            initial={{
                opacity: 0,
                pathLength: 0,
            }}
            animate={{
                opacity: 1,
                pathLength: 1
            }}
            transition={{
                delay:4,
                duration: 2,
                ease: 'easeInOut'
            }}
            
            d="M37.4,174.5H8.9v-40.8l51.6-63.8H-58.3l52.6,63.5v41.2h-28.2c-9.7,0-9.7,14.5,0,14.5h71.3C47.1,189,47,174.5,37.4,174.5z
	          M1.3,105.7c0-5.1,4.1-9.2,9.2-9.2s9.2,4.1,9.2,9.2c0,5.1-4.1,9.2-9.2,9.2C5.5,114.9,1.3,110.8,1.3,105.7z M10.6,105.7" />
          </g>
        </svg>
        <Text>
            Campari-bar
        </Text>
      </Link>
    </Container>
  );
}

export default Logo
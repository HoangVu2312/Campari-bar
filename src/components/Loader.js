import { motion } from 'framer-motion'
import React from 'react'
import  styled  from 'styled-components'


const Container = styled(motion.div)`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;

touch-action: none;
overflow: hidden;

width: 100vw;
height: 100vh;

z-index: 6;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-color:  ${props => props.theme.body};
color: ${props => props.theme.text};

svg{
    width: 10vw;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    @media (max-width: 48em) {
        width: 25vw;
    }

    g{
        path{
            stroke: ${props => props.theme.text}
        }
    }
}
`
const Text = styled(motion.span)`
font-size: ${props => props.theme.fontxl};
color:${props => props.theme.text};
padding-top: 0.5rem;

`



const Loader = () => {
  return (
    <Container
    initial={{
        y:0, opacity:1
    }}
    exit={{
        y:'100%', opacity: 0
    }}
    transition={{
        duration: 2
    }}
    >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="48px"
          viewBox="-63 65 128 128"
          width="48px"
          fill='none'
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
                duration: 2,
                ease: 'easeInOut'
            }}
            
            d="M37.4,174.5H8.9v-40.8l51.6-63.8H-58.3l52.6,63.5v41.2h-28.2c-9.7,0-9.7,14.5,0,14.5h71.3C47.1,189,47,174.5,37.4,174.5z
	          M1.3,105.7c0-5.1,4.1-9.2,9.2-9.2s9.2,4.1,9.2,9.2c0,5.1-4.1,9.2-9.2,9.2C5.5,114.9,1.3,110.8,1.3,105.7z M10.6,105.7" />
          </g>
        </svg>

        <Text>
            Luxury choice
        </Text>

    </Container>
  )
}

export default Loader
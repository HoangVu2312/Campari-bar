import React from 'react'
import  styled  from 'styled-components'

import { motion } from 'framer-motion'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const Section = styled.section`
position: relative;
min-height: 100vh;
width: 100vw;
overflow: hidden;
margin: 5rem auto;

display:flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
`

const FooterComponent = styled(motion.footer)`
width: 80vw;

ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${props => props.theme.text};
    border-bottom: 1px solid ${props => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
}

li{
    padding: 2.5rem;
    font-size: ${props => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
        transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${props => props.theme.fontmd};
    }
}
`

const LogoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

svg{
  width: 15vw;
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

h3{
    font-size:${props => props.theme.fontxxl};
    font-family: 'Kaushan Script';

    @media (max-width: 48em) {
      font-size:${props => props.theme.fontxl};
    }
}

`


const Bottom = styled.div`
padding: 0.5rem 0;
margin: 0 4rem;
font-size: ${props => props.theme.fontlg}

display: flex;
justify-content: center;
align-items: center;


span{
  display: inline-block;
}


`
const Footer = () => {

    // navigate to sections
    const {scroll} = useLocomotiveScroll();

    const handleScroll = (id) => {
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
    <Section>
      
        <LogoContainer>
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
            <path  d="M37.4,174.5H8.9v-40.8l51.6-63.8H-58.3l52.6,63.5v41.2h-28.2c-9.7,0-9.7,14.5,0,14.5h71.3C47.1,189,47,174.5,37.4,174.5z
	          M1.3,105.7c0-5.1,4.1-9.2,9.2-9.2s9.2,4.1,9.2,9.2c0,5.1-4.1,9.2-9.2,9.2C5.5,114.9,1.3,110.8,1.3,105.7z M10.6,105.7" />
          </g>
        </svg>
          <h3>A product by Hoang Vu</h3>
        </LogoContainer>

        <FooterComponent
        initial={{y:'-400px'}}
        whileInView={{y:0}}
        viewport={{once:false}}
        transition={{
            duration:1.5
        }}
        >  
          <ul>
            <li onClick={() => handleScroll('#home')}>home</li>
            <li onClick={() => handleScroll('.about')}>about</li>
            <li onClick={() => handleScroll('#shop')}>Menu</li>
            <li onClick={() => handleScroll('#newArrival')}>Team</li>

            <li>
              <a href="https://hoangvuportfolio.vercel.app" target="_blank" rel="noreferrer">
                lool book
              </a>
            </li>
            <li>
              <a href="https://hoangvuportfolio.vercel.app" target="_blank" rel="noreferrer">
                reviews
              </a>
            </li>
          </ul>
          <Bottom>
            <span>&copy; {new Date().getFullYear()}. All Rights Reserved </span>

          </Bottom>
        
        </FooterComponent>
    </Section>
  );
}

export default Footer
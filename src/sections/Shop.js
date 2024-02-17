import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useLayoutEffect, useRef } from 'react'
import  styled  from 'styled-components'

import img1 from '../assets/Images/4.png';
import img2 from '../assets/Images/5.png';
import img3 from '../assets/Images/6.png';
import img4 from '../assets/Images/7.png';
import img5 from '../assets/Images/8.png';
import img6 from '../assets/Images/9.png';
import img7 from '../assets/Images/10.png';
import img8 from '../assets/Images/11.png';
import img9 from '../assets/Images/12.png';
import img10 from '../assets/Images/13.png';




const Section = styled.section`
position: relative;
min-height: 100vh;
height: auto;
width: 100vw;
overflow: hidden;
margin: 0 auto;

display:flex;
justify-content: flex-start;
align-items: flex-start;

`

const Title = styled.h1`
  font-family: 'Kaushan Script';
  font-size: ${(props) => props.theme.fontxxxl};
  font-weight: 300;

  color: ${props => props.theme.text};
  text-shadow: 1px 1px 1px ${props => props.theme.body};
  
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 10;

  @media (max-width: 64em) {
    font-size: ${props => props.theme.fontxxl};
  }
  
  @media (max-width: 48em) {
    font-size: ${props => props.theme.fontxl};
  }

`

const Left = styled.div`
width:35%;
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};

min-height: 100vh;
z-index: 5;

position: fixed;
left: 0;
display: flex;
justify-content: center;
align-items: center;

p{
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width:80%;
    margin: 0 auto;
}

@media (max-width: 64em) {
  p {
    font-size: ${(props) => props.theme.fontmd};
  }
}

@media (max-width: 48em) {
  width: 40%;
  p {
    font-size: ${(props) => props.theme.fontsm};
  }
}

@media (max-width: 30em) {
  p {
    font-size: ${(props) => props.theme.fontxs};
  }
}

`

const Right = styled.div`
position: absolute;
left: 35%;
min-height: 100vh;
padding-left: 30%;

background-color: ${props => props.theme.grey};
display: flex;
justify-content: flex-start;
align-items: center;

h1{
    width: 5rem;
    margin: 0 2rem;
}

`

const Item = styled(motion.div)`
width: 20rem;
margin-right: 6rem;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


img {
  width: 100%;
  height: auto;
  cursor: pointer;
}

h1{
  display: inline-block;
  width: fit-content;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
}

@media (max-width: 48em) {
  width: 20rem;
}

`

const Product = ({img, title = ''}) => {
  return(
    <Item
    initial={{filter: 'grayscale(100%)'}}
    whileInView={{filter: 'grayscale(0%)'}}
    transition={{duration: 0.5}}
    viewport={{once: false, amount: 'all'}}
    >
      <img src={img} alt={title}/>
      <h1>{title}</h1>
    </Item>
  )
}

const Shop = () => {

  gsap.registerPlugin(ScrollTrigger)

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.App', // locomotive element
          scrub: true,
          pin: true,
          markers:false,
        },
        // increase scrolling height => equal to scrolling element width
        height: `${scrollingElement.scrollWidth}px`,
        ease: 'none'
      })

      // horizontall scrolling
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.App', // locomotive element
          scrub: true,
          markers:false,
        },
        // increase scrolling height => equal to scrolling element width
        x: -pinWrapWidth,
        ease: 'none'
      })

    ScrollTrigger.refresh();
    }, 1000)

    return () => {

      //clear instance
      t1.kill();
      ScrollTrigger.kill();
    }
  }, [])



  return (
    <Section ref={ref} id='shop'>
      <Title data-scroll data-scroll-speed="-1">
        Drinks Menu
      </Title>

      <Left>
        <p>
        Our bar is dedicated to crafting exceptional drinks right here in the USA. We meticulously 
        select the finest ingredients, ensuring each cocktail is made with top-quality spirits and fresh, 
        flavorful mixers.
        <br />
        <br />
        Just like fashion, we believe in using premium materials to create our drinks. From handpicked fruits
        to artisanal syrups, we spare no expense in delivering a superior drinking experience. Whether you're craving
        a refreshing cocktail, a bold whiskey, or a smooth glass of wine, we have something special waiting for you.
        </p>
      </Left>

      <Right ref={horizontalRef}>
        <Product img={img1} title='Negroni'/>
        <Product img={img2} title='Daiquiri'/>
        <Product img={img3} title='Margarita'/>
        <Product img={img4} title='Whiskey Sour'/>
        <Product img={img5} title='Manhattan'/>
        <Product img={img6} title='Aperol Spritz'/>
        <Product img={img7} title='Mojito'/>
        <Product img={img8} title='Gimlet'/>
        <Product img={img9} title='Boulevardier'/>
        <Product img={img10} title='Pisco Sour'/>

      </Right>
    </Section>
  );
}

export default Shop
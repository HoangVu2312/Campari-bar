import React from 'react'
import  styled  from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import img1 from '../assets/Images/1.png';
import img2 from '../assets/Images/17.png';
import img3 from '../assets/Images/14.png';
import img4 from '../assets/Images/15.png';
import img5 from '../assets/Images/16.png';



import { useRef } from 'react';
import { useLayoutEffect } from 'react';


const Section = styled.section`
position: relative;
min-height: 100vh;
width: 100vw;

margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;


`

const Overlay = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 30vw;
height: 90vh;

z-index:11;
box-shadow: 0 0 0 3vw ${props => props.theme.body};
border: 3px solid ${props => props.theme.text};


@media (max-width: 70em) {
  width: 40vw;
  height: 80vh;
}

@media (max-width: 64em) {
  width: 50vw;
  box-shadow: 0 0 0 60vw ${props => props.theme.text};
}

@media (max-width: 48em) {
  width: 60vw;
}

@media (max-width: 30em) {
  width: 80vw;
  height: 60vh;
}

`

const Title = styled.h1`
  font-family: 'Kaushan Script';
  font-size: ${(props) => props.theme.fontxxxl};
  font-weight: 300;

  color: ${props => props.theme.body};
  text-shadow: 1px 1px 1px ${props => props.theme.text};
  
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 15;

  @media (max-width: 64em) {
    font-size: ${props => props.theme.fontxxl};
  }
  
  @media (max-width: 48em) {
    font-size: ${props => props.theme.fontxl};
  }

`

const Text = styled.div`
width:20%;
font-size: ${props => props.theme.fontlg};
font-weight: 300;
position: absolute;
top: 0;
right: 0;
z-index: 11;
padding: 2rem;

@media (max-width: 48em) {
  display:none;
}

`

const Container = styled.div`
position: absolute;
left: 50%;
top:0%;
transform: translate(-50%, 0);
width:25vw;
height: auto;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 64em) {
  width: 30vw;
}

@media (max-width: 48em) {
  width: 40vw;
}

@media (max-width: 30em) {
  width: 60vw;
}

`

const Item = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 5rem 0;


img {
  width: 100%;
  height: auto;
  cursor: pointer;
  z-index: 5;
}

`

const Product = ({img, title = ''}) => {
  return(
    <Item>
      <img src={img} alt={title}/>
      <h2>{title}</h2>
    </Item>
  )
}

const NewArrival = () => {

    gsap.registerPlugin(ScrollTrigger)

    const ref = useRef(null);
    const ScrollingRef = useRef(null);

    useLayoutEffect(() => {
        let element = ref.current;
    
        let scrollingElement = ScrollingRef.current;
    
    
        let t1 = gsap.timeline();
    
        setTimeout(() => {
          t1.to(element, {
            scrollTrigger: {
              trigger: element,
              start: 'top top',
              end: 'bottom+=100% top-=100%',
              scroller: '.App', // locomotive element
              scrub: true,
              pin: true,
              markers:false,
            },

            ease: 'none'
          })
    
          // Vertical scrolling
          t1.fromTo(scrollingElement,
            {
                y: '0',
            },
            {
                y:'-100%',
            scrollTrigger: {
              trigger: scrollingElement,
              start: 'top top',
              end: 'bottom top',
              scroller: '.App', // locomotive element
              scrub: true,
              markers:false,
            },
            
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
    <Section ref={ref} id='newArrival'>
      <Overlay />

      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        Our Team
      </Title>

      <Container ref={ScrollingRef}>
        <Product img={img1} title="Ted-bartender" />
        <Product img={img2} title="Bary-bartender" />
        <Product img={img3} title="Helen-manager" />
        <Product img={img4} title="Dan-Waiter" />
        <Product img={img5} title="Ann-Marketing" />
      </Container>

      <Text data-scroll data-scroll-speed="-4">
      Our bar is fueled by a dynamic team of five individuals, each bringing their own unique skills
       and personality to the table. With a shared commitment to excellence and customer satisfaction,
       our team works harmoniously to create an inviting and enjoyable atmosphere for our patrons.
        <br />
        <br />
        Our bar is fueled by a dynamic team of five individuals, each bringing their own unique skills 
        and personality to the table. With a shared commitment to excellence and customer satisfaction, 
        our team works harmoniously to create an inviting and enjoyable atmosphere for our patrons.
        <br />
        <br />
        Together, we strive to exceed expectations and leave a lasting impression on everyone who walks through
         our doors. With a passion for hospitality and a drive for excellence, our bar team is at the heart of 
         what makes our establishment special.
      </Text>
    </Section>
  );
}

export default NewArrival
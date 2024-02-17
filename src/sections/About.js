import React from 'react'
import  styled  from 'styled-components'

import img1 from '../assets/Images/1.png'
import img2 from '../assets/Images/2.png'
import img3 from '../assets/Images/3.png'

const Section = styled.section`
position: relative;
min-height: 100vh;
width: 80vw;
display:flex;

margin: 0 auto;

@media (max-width: 48em) {
  width: 90vw;
}

@media (max-width: 30em) {
  width: 100vw;
}

`

const Title = styled.h1`
font-size: ${props => props.theme.fontBig};
color: ${props => props.theme.body};
text-shadow: 1px 1px 1px ${props => props.theme.text};
font-family: 'Kaushan Script';
font-weight: 300;

position: absolute;
top: 1rem;
left: 5%;
z-index:5;

@media (max-width: 64em) {
  font-size: ${props => `calc(${props.theme.fontBig} - 5vw)`};
  top: 0;
  left: 0;
}

@media (max-width: 48em) {
  font-size: ${props => props.theme.fontxxxl};
}

`

const Left = styled.div`
width:50%;
font-size: ${props => props.theme.fontlg};
font-weight: 300;
position: relative;
z-index: 5;
margin-top: 20%;

@media (max-width: 64em) {
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  margin: 0 auto;

  padding: 2rem;
  font-weight: 600;

  backdrop-filter: blur(2px);
  background-color: ${props => `rgba(${props.theme.textRgba}, 0.4)`};
  border-radius: 20px; 
}

@media (max-width: 48em) {
  font-size: ${props => props.theme.fontmd};
}

@media (max-width: 30em) {
  font-size: ${props => props.theme.fontsm};
  width: 70%;
}

`
const Right = styled.div`
width:50%;
position: relative;
img{
    width: 100%;
    height: auto;
}

.small-img-1{
    width:40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
    z-index:15;
}

.small-img-2{
    width:40%;
    position: absolute;
    left: 80%;
    bottom: 30%;
}

@media (max-width: 64em) {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    height: 100vh;
    object-fit: cover;
  }

  .small-img-1{
    width:30%;
    height: auto;
    left: 5%;
    bottom: 10%;
    z-index: 3;
  }

  .small-img-2{
    width:30%;
    height: auto;
    left: 60%;
    bottom: 40%;
  }
}

`


const About = () => {
  return (
    <Section id='fixed-target' className='about'>
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About us
      </Title>

      <Left data-scroll data-scroll-sticky data-scroll-target='#fixed-target' >
      Welcome to our Campari bar, where we blend creativity and mixology to offer a unique drinking experience. 
      Our passion for crafting unforgettable cocktails is matched only by our dedication to providing exceptional service.
        <br />
        <br />
        At our bar, we believe that every sip should be an adventure. From our carefully curated cocktail menu to our expertly crafted drinks, 
        we're committed to delivering excellence in every glass. Whether you're a cocktail connoisseur or just looking for a fun night out, 
        our bar offers something for everyone. Come taste the difference and let us show you why we're the talk of the town.
        <br />
        <br />
        With a focus on creativity and quality, we strive to provide a one-of-a-kind drinking experience that keeps our guests coming back for more. 
        From trendy cocktails to timeless classics, we've got the perfect pour for every palate.
      </Left>

      <Right>
        <img src={img1} alt='About us'/>
        <img data-scroll data-scroll-speed='5' src={img2} alt='About us' className='small-img-1'/>
        <img data-scroll data-scroll-speed='-2' src={img3} alt='About us' className='small-img-2'/>
      </Right>
    </Section>
  );
}

export default About
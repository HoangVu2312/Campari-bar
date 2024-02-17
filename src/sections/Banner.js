import React from 'react'
import  styled  from 'styled-components'


const Section = styled.section`
width: 80vw;
min-height: 100vh;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;

position: relative;

@media (max-width: 48em) {
    width: 90vw;
}

`
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

min-height: 100vh;

@media (max-width: 64em) {
    justify-content: center;
}

`

const BannerComponent = styled.h1`
font-family: 'Kaushan Script';
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};
white-space: nowrap;
text-transform: uppercase;
line-height: 1;
cursor: pointer;

@media (max-width: 70em) {
    font-size: ${props => props.theme.fontxxl};
}

@media (max-width: 64em) {
    font-size: ${props => props.theme.fontxl};
}

@media (max-width: 48em) {
    font-size: ${props => props.theme.fontlg};
    margin: 1rem 0;
}

@media (max-width: 30em) {
    font-size: ${props => props.theme.fontmd};
    margin: 0.5rem 0;
}

span{
    display: block;
    background-color: ${props => props.theme.body};
    padding: 1rem 2rem;
}
`


const Banner = () => {
  return (
    <Section>
        <Container id='up'>
            <BannerComponent>
                <span data-scroll data-scroll-direction='horizontal' data-scroll-speed='8' data-scroll-target='#up' > MOJITO   HAVANA   APEROL SPRITZ </span>
            </BannerComponent>
            <BannerComponent>
                <span data-scroll data-scroll-direction='horizontal' data-scroll-speed='-6' data-scroll-target='#up' > GIN FIZZ BRAMBLE BELLINI </span>
            </BannerComponent>
            <BannerComponent>
                <span data-scroll data-scroll-direction='horizontal' data-scroll-speed='5' data-scroll-target='#up'> PINA COLADA BAMBOO COLLINS </span>
            </BannerComponent>
            <BannerComponent>
                <span data-scroll data-scroll-direction='horizontal' data-scroll-speed='-8' data-scroll-target='#up' >CAIPIRINHA MARTINI PISCO</span>
            </BannerComponent>
            <BannerComponent>
                <span data-scroll data-scroll-direction='horizontal' data-scroll-speed='4' data-scroll-target='#up' > BONITA EL DIABLO JUNGLE BIRD </span>
            </BannerComponent>
        </Container>
    </Section>
  )
}

export default Banner
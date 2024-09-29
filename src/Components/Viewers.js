import React, { useEffect } from 'react';
import styled from 'styled-components';
import marvel from "../vedios/marvel.png"
import pixar from "../vedios/pixar.png"
import disney from "../vedios/disney.png"
import star from "../vedios/start.png"
import national from "../vedios/national.png"
import marvelintro from "../Introvedios/marvel_intro.mp4"
import starwarin from "../Introvedios/starwar_intro.mp4"
import nationalin from "../Introvedios/national_intro.mp4"
import pixarin from "../Introvedios/pixarintro.mp4"
import disneyint from "../Introvedios/Disney_Logo.mp4"
function Viewers() {

    useEffect(() => {
        const videos = document.querySelectorAll('video');
    
        videos.forEach((video) => {
          video.addEventListener('canplay', () => {
            video.play()
              .then(() => {
                console.log('Video started playing.');
              })
              .catch(error => {
                console.error('Error playing video:', error);
              });
          });
        });
      }, []);

  return (
    <PageContainer>
    <Container>
        <Wrap>
        <img src={marvel} alt="marvel" style={{ padding: '20px' }} />
        <video autoPlay={true} playsInline={true} muted loop>
            <source src={marvelintro} type='video/mp4'/>
        </video>

        </Wrap>
        <Wrap>
            <img src={pixar} alt="pixar"style={{ marginTop: '20px',padding: '15px' }}/>
            <video autoPlay={true} playsInline={true} muted loop>
            <source src={pixarin} type='video/mp4'/>
        </video>

        </Wrap>
        <Wrap>
            <img src={disney} alt="disney" style={{ marginTop: '30px',padding: '25px' }}/>
            <video autoPlay={true} playsInline={true} muted loop>
            <source src={disneyint} type='video/mp4'/>
        </video>

        </Wrap>
        <Wrap>
            <img src={star} alt="stars" style={{ marginTop: '20px',padding: '25px' }}/>
            <video autoPlay={true} playsInline={true} muted loop>
            <source src={starwarin} type='video/mp4'/>
        </video>

        </Wrap>
        <Wrap>
        <img src={national} alt="national" style={{ marginTop: '25px',padding: '25px' }}/>
        <video autoPlay={true} playsInline={true} muted loop>
            <source src={nationalin} type='video/mp4'/>
        </video>
        </Wrap>



    </Container>
    </PageContainer>
  )
}
const PageContainer = styled.div`

padding: 0 0 26px;
position: relative;
width: 100%;
background-color:  rgba(4, 7, 15, 1);
display: flex;
flex-direction: column;
`;

const Container = styled.div`

padding-top: 20px;
display : grid ;
grid-gap: 20px;
gap:20px;
position: relative;
grid-template-columns: repeat(5, minmax(0, 1fr));
margin-left: 5rem;
margin-right: 2rem;



`;

const Wrap = styled.div`

padding: 0;
border-radius: 10px;
cursor: pointer;
overflow: hidden;
background-color:  rgba(6, 7, 27, 1);
margin-right: 2px;
margin-left: 2px;
position: relative;
transition: .5s;

img{
    display: block;
    height: auto;
    object-fit: cover;
    opacity: 1;
    position: relative;
}

video{

    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    opacity: 0;
    z-index: 0;
}

    &:hover{
        transform: scale(1.05);

        video{

            opacity: 1;
        }
    }



`;

export default Viewers
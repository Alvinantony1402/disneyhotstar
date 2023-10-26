import React from 'react'
import trailer from "../vedios/trailer.mp4";
import styled from 'styled-components';
import imagetitle from "../vedios/imagelogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';



const HomeTrailer = (props) => {
  return (
    <>
    <PageContainer>
        
        <Background>

        <video autoPlay muted loop>
          <source src={trailer} type="video/mp4" /></video>
        </Background>
        </PageContainer>
        <Innerpagecontainer>
        <ImageTitle>
            <img src = {imagetitle} />


        </ImageTitle>
        <Contentmeta>

            <Subtitle>
            <ul class="custom-bullets">
            <li>2023</li>
            <li>2h 43min</li>
            <li>5 languages</li>
            </ul>
            </Subtitle>
            <Description>
            Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.
            </Description>
            <Subtitle>
            <ul class="custom-bullets">
            <li>Action</li>
            <li>Fantasy</li>
            <li>Sci-Fi</li>
            </ul>

            </Subtitle>

            <Controls>
                <Player>
                <FontAwesomeIcon icon={faPlay} className="play-icon" style={{ marginRight: '10px' }}/>
                    <span> Watch Now</span>
                </Player>
                <AddList>
                    <span/>

                    <span/>
                    
                </AddList>
            </Controls>

        </Contentmeta>
       
        </Innerpagecontainer>

    
 
    </>
    
  )
}

const PageContainer = styled.div`

position: relative;
min-height: calc(100vh - 322px);
overflow-x: hidden;
display: inline;
padding: 0 calc(3.5vw + 5px);
cursor: pointer;

`;

const Innerpagecontainer = styled.div`

position: relative;
min-height: calc(100vh - 322px);
overflow-x: visible;
display: flex;
flex-direction: column;
padding: 0 calc(3.5vw + 5px);
cursor: pointer;

`

const Background = styled.div`
left: 0px;
position: fixed;
right: 0px;
top: 0px;
z-index: -1;
display: flex;
background-repeat: no-repeat;
background: linear-gradient(to right, transparent, black);
video{
    width: 100vw;
    height: 100%;

    @media (max-width: 768px){
        width: initial;
    }
}

`;
const ImageTitle = styled.div`

align-items: flex-end;
display: flex;
-webkit-box-pack: start;
justify-content: flex-start;
margin: 0px 30px;
height: 27vw;
min-height: 170px;
margin-bottom: 24px;
margin-left: 30px;
width: 40%;

img{
    max-width: 500px;
    min-width: 150px;
    width: 35vw;
}

`;

const Contentmeta= styled.div`

max-width: 874px;
margin-left: 50px;


`;

const Controls = styled.div`

align-items: center;
display: flex;
flex-flow: row nowrap;
margin-top: 24px;
margin-right: auto;
min-height: 56px;

`;

const Subtitle = styled.div`
color: white;
font-size: 16px;
min-height:20px;
font-weight: bold;

ul.custom-bullets {
    list-style: none; /* Remove list-style (bullets) */
    display: flex; /* Display list items in a row */
    padding: 0; /* Remove default padding */
  }
  ul.custom-bullets li {
    margin-right: 10px; /* Adjust this value to control the horizontal space between items */
  }
  ul.custom-bullets li:not(:last-child)::after {
    content: "";
    display: inline-block;
    width: 1px; /* Adjust the width of the separator */
    height: 10px; /* Adjust the height of the separator */
    background-color: white; /* Color of the separator */
    margin: 0 5px; /* Adjust the margin for spacing */
  }

@media ( max-width: 768px){
    font-size: 12px;
}
@media( max-width: 500px){
    display: none;
    
}


`;

const Description = styled.div`

line-height: 1.4;
font-size: 17px;
padding: 16px 0px;
color: white;
opacity: 0.8;

@media( max-width: 768px){
    font-size: 14px;

}
@media( max-width: 500px){
    display: none;
    
}


`;

const Player = styled.button`
font-size: 18px;
margin: 0px 22px 0px 0px;
padding: 0px 24px;
height: 56px;
width: 25vw;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
letter-spacing: 1.8px;
text-align: center;
border: none;
background-color: grey;
color: white;
opacity: 0.5;
font-weight: bolder;
transition: transform 0.3s;



icon{

    width: 32px;
    margin-right: 10px;
}


&:hover{
    opacity: 0.8;
    transform: scale(1.01);
}
@media( max-width: 768px){
    font-size: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px;

}


`;

const AddList = styled.div`

margin-right: 16px;
height: 56px;
width: 56px;
display: flex;
justify-content: center;
align-items: center;
background-color: grey;
opacity: 0.5;
border-radius: 4px;
color: white;
transition: transform 0.3s;
font-weight: bold;

span{

    background-color: white;
    display: inline-block;

    &:first-child{
        height: 2px;
        transform: translate(1px, 0px) rotate(0deg);
        width: 16px;

    }
    &:nth-child(2){
        height: 16px;
        transform: translateX(-8px) rotate(0deg);
        width: 2px;

}

}
&:hover{
    opacity: 0.8;
    transform: scale(1.01);
}


`;



export default HomeTrailer;
import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilm, faTv, faSearch, faPlayCircle, faGem } from '@fortawesome/free-solid-svg-icons';

function SideBar() {
  return (
    <Side>
        <SideItems>

        <FontAwesomeIcon icon={faHome} className="text-base " />
        <span>Home</span>

        
        </SideItems>

        <SideItems>
        <FontAwesomeIcon icon={faFilm} className="text-base" />
        <span>Movies</span>

        </SideItems>

        <SideItems>
        <FontAwesomeIcon icon={faTv} className="text-base " />
        <span>Series</span>

        </SideItems>

        <SideItems>
        <FontAwesomeIcon icon={faSearch} className="text-base " />
        <span>Search</span>
        </SideItems>

        <SideItems>
        <FontAwesomeIcon icon={faPlayCircle} className="text-base " />
        <span>Watch List</span>

        </SideItems>

        <SideItems>
        <FontAwesomeIcon icon={faGem} className="text-base" />
        <span>Originals</span>

        </SideItems>




    </Side>
  )
}


const Side = styled.div`

position: fixed;
top: 0%;
left: 0%;
height: 100vh;
width: 7rem;
margin: 0px;
display: flex;
flex-direction: column;
background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
z-index:999;
&:hover {

    width: 15rem;
    background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

}


`;

const SideItems = styled.a`

position: relative;
display: flex;
top: 30%;
bottom: auto;
flex-direction: column;
align-items: center;
justify-content: center;
height: 48px;
width: 3rem;
margin: 5px 25px;
scroll-margin-left: 0px;
scroll-margin-right: 0px ;
color: grey; /* Initially transparent */
  transition: color 0.3s,  transform 0.3s; /* Smooth color transition on hover */
  span {
    display: none; /* Initially, hide the text */
  }

  &:hover {
    color: white;
    transform: scale(1.1); 
    width: 7rem;
    flex-direction: row;
    


    span {
      display: flex; 
      margin-left: 15px;
    }
  }

 
  

`;

export default SideBar
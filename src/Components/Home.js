import React from 'react'
import SideBar from './SideBar'
import HomeTrailer from './HomeTrailer'
import styled from 'styled-components'
import MovieCardd from './MovieCardd'
import Newlyadded from './Newlyadded'
import Shows from './Shows'
import SportsCard from './SportsCard'
import Viewers from './Viewers'


function Home() {
  return (
      <div>
    <SideBar/>
    <HomeTrailer/>
    <Innercontainer>
      <MovieCardd/>
      <Newlyadded/>
      <Shows/>
      <Viewers/>
      <SportsCard/>
      

    </Innercontainer>
    
    </div>
  )
}

const Innercontainer = styled.div`
position: relative;
min-height: calc(100vh - 322px);
overflow-x: visible;
display: flex;
flex-direction: column;
cursor: pointer;

`;

export default Home
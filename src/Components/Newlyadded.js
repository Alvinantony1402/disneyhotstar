import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moviecard from '../vedios/loki.webp';

function Newlyadded() {
  return (
    <div>

        <Container> <span> <p style={{ color: 'blue', display: 'inline', marginRight: '10px' }}> Free</p>Newly Added</span>

            <Content>
              <Wrap>
                <Link to="/">
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/en/4/4b/Loki_season_2_poster.jpg"
                    alt="card"
                    />

                </Link>
                <div className = "dets">
                        <button> <i className="fa fa-play"></i>Watch now</button>
                        <h4> Loki</h4>
                        <h5> 1 hr 41 min | Romance | Drama | 2023</h5>
                        <p> The second season of the American television series Loki, based on Marvel Comics featuring the character of the same name, sees Loki working with Mobius M.</p>
                        

                
                </div>


              </Wrap>
              <Wrap>
                <Link to="/">
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/en/4/4b/Loki_season_2_poster.jpg"
                    alt="card"
                    />

                </Link>
                <div className = "dets">
                        <button> <i className="fa fa-play"></i>Watch now</button>
                        <h4> Loki</h4>
                        <h5> 1 hr 41 min | Romance | Drama | 2023</h5>
                        <p> The second season of the American television series Loki, based on Marvel Comics featuring the character of the same name, sees Loki working with Mobius M.</p>
                        

                
                </div>

              </Wrap>
              <Wrap>
                <Link to="/">
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/en/4/4b/Loki_season_2_poster.jpg"
                    alt="card"
                    />

                </Link>
                <div className = "dets">
                        <button> <i className="fa fa-play"></i>Watch now</button>
                        <h4> Loki</h4>
                        <h5> 1 hr 41 min | Romance | Drama | 2023</h5>
                        <p> The second season of the American television series Loki, based on Marvel Comics featuring the character of the same name, sees Loki working with Mobius M.</p>
                        

                
                </div>

              </Wrap>
              <Wrap>
                <Link to="/">
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/en/4/4b/Loki_season_2_poster.jpg"
                    alt="card"
                    />

                </Link>
                <div className = "dets">
                        <button> <i className="fa fa-play"></i>Watch now</button>
                        <h4> Loki</h4>
                        <h5> 1 hr 41 min | Romance | Drama | 2023</h5>
                        <p> The second season of the American television series Loki, based on Marvel Comics featuring the character of the same name, sees Loki working with Mobius M.</p>
                        

                
                </div>

              </Wrap>
              <Wrap>
                <Link to="/">
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/en/4/4b/Loki_season_2_poster.jpg"
                    alt="card"
                    />

                </Link>
                <div className = "dets">
                        <button> <i className="fa fa-play"></i>Watch now</button>
                        <h4> Loki</h4>
                        <h5> 1 hr 41 min | Romance | Drama | 2023</h5>
                        <p> The second season of the American television series Loki, based on Marvel Comics featuring the character of the same name, sees Loki working with Mobius M.</p>
                        

                
                </div>

              </Wrap>
              <Wrap>
                <Link to="/">
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/en/4/4b/Loki_season_2_poster.jpg"
                    alt="card"
                    />

                </Link>
                <div className = "dets">
                        <button> <i className="fa fa-play"></i>Watch now</button>
                        <h4> Loki</h4>
                        <h5> 1 hr 41 min | Romance | Drama | 2023</h5>
                        <p> The second season of the American television series Loki, based on Marvel Comics featuring the character of the same name, sees Loki working with Mobius M.</p>
                        

                
                </div>

              </Wrap>
              <Wrap>
                <Link to="/">
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/en/4/4b/Loki_season_2_poster.jpg"
                    alt="card"
                    />

                </Link>
                <div className = "dets">
                        <button> <i className="fa fa-play"></i>Watch now</button>
                        <h4> Loki</h4>
                        <h5> 1 hr 41 min | Romance | Drama | 2023</h5>
                        <p> The second season of the American television series Loki, based on Marvel Comics featuring the character of the same name, sees Loki working with Mobius M.</p>
                        

                
                </div>

              </Wrap>

               
            </Content>



        </Container>



    </div>
    
  )
}

const Container = styled.div`

padding: 0 0 26px;
background-color: black;
position: relative;
width: 100%;
background:rgba(4, 7, 15, 1);
display: flex;
flex-direction: column;

span{
    margin-left: 6rem;
    margin-top: 4rem;
    margin-bottom: 2rem;
    font-weight: bolder;
    font-size: 24px;

}





@media (max-width:768px ) {
    size: 75%;
    margin-left: 6rem;
   
    
}
@media (max-width:768px ) {
    size: 75%;
    margin-left: 0rem;
    position: relative;
   
    
}
`;

const Content = styled.div`
display: grid;
position: relative;
overflow-x: visible;
grid-gap: 10px;
gap:20px;
margin-left: 6rem;

grid-template-columns: repeat(7, minmax(0, 1fr));

@media (max-width:768px ) {
    margin-left: 7rem;
    grid-template-columns: repeat(7, minmax(0, 1fr));

   
    
}

@media (max-width:479px ) {
    margin-left: 2rem;
    grid-template-columns: repeat(7, minmax(0, 1fr));
   
    
}

`;

const Wrap = styled.div`
padding-top: 0px;
padding-bottom: 0px;
border-radius: 5px;
cursor: pointer;
overflow: hidden;
border: 1px solid grey;
position: relative;
transform: scale(1);
transition: 0.3s;
margin-right: 2px;
margin-left: 2px;

&:hover{

    transform: scale(1.6);
    z-index: 99;
}

img{
    display: block;
    width: 100%; /* Make the image 100% wide */
    height: auto;
    object-fit: cover;
    opacity: 1;
    position: relative;
}

.dets{
    width: 100%;
    height: 100%;
    font-weight: bold;
    background: linear-gradient(to bottom, rgba(0,0,0,0)20%, rgba(4, 7, 20, 1)100%);
    color: white;
    top: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 10px;
    border-radius: 10px;
    opacity: 0;
    transition: 0.5s;

}  

&:hover .dets{

    opacity: 1;
    cursor: pointer;
}

.dets h4{
    font-size: 14px;
    padding: 1px 0px;

}

.dets h5{

    font-size: 12px;
    word-spacing: 1px;
    margin-bottom: 2px;
    padding: 2px 0px;
    font-weight: 600;

}

.dets p{

    font-size: 8px;
    font-weight: 500;
    margin-bottom: 1px;
    opacity: 0.8;
    color: gray;
}

.dets button{

    width: 100%;
    margin-top: 5px;
    font-size: 9px;
    padding: 5px 10px;
    color: white;
    background-color: white;
    outline: none;
    border: none;
    text-align: left;
    border-radius: 5px;
    font-weight: bold;
    opacity: 0.8;
    transform: scale(1);
    transition: 0.3s;
    color: black;
    align-items: center;

}
.dets button a{

    color: black;
    text-decoration: none;
    font-size: 11px;
    font-weight: 600;
    margin-left: 10px;
    align-items: center;
}

.dets button:hover{
    transform: scale(1.01);


    
}
    




`;

export default Newlyadded;
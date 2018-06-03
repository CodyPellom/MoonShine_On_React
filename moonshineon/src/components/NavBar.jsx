import React, { Component } from 'react'
import styled from 'styled-components';


const NavStyler = styled.div`
width: 100%;
height: 100px;
background-color: rgb(5, 9, 20);
border: solid black 5px;
display: flex;
flex-direction: row;




.navText {
color: whitesmoke;
font-family: 'Special Elite';
font-size: 18px;
margin-right: 15px;



}

#navLogo {

color: whitesmoke;
font-family: 'Special Elite';
font-size: 30px;
margin-right: 1000px;
margin-bottom: 15px;
}
`
export class NavBar extends Component {
  render() {
    return (
      <div>
        <NavStyler>
            <h3 id="navLogo">MoonShine On</h3>
            <a class="navText" href="#">contact</a>
            <a class="navText" href="#">about</a>
            <a class="navText" href="#">original site</a>
        
        </NavStyler>
      </div>
    )
  }
}

export default NavBar

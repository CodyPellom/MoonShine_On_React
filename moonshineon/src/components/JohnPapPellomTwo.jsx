import React, { Component } from 'react'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll'


const PapTwoStyler = styled.div`
background-image: url(https://i.imgur.com/Kcgtux7.png);
background-attachment: fixed;
height: 1500px;
width: 100%;
background-position-x: 200px;
background-position-y: -50px;
background-color: black;
border-bottom: solid darkslategrey 40px;


#PageHeader {
display: flex;
flex-direction: row;
padding-top: 100px;
font-family: 'Special Elite';
font-size: 65px;
color: whitesmoke;
padding-top: 200px;
margin-top: -50px;
padding-bottom: 50px;
}

.PageText {
display: flex;
flex-direction: row;
justify-content: left ;
margin-right: 100px;
font-family: 'Special Elite';
font-size: 25px;
color: whitesmoke;
}

#JohnFainLink {
    display: flex;
    flex-direction: row;
    justify-content: left;
    margin-right: 100px;
    text-decoration: whitesmoke;
    text-decoration-line: none;
    font-family: 'Special Elite';
    color: darkred;
    font-size: 25px;
    padding-top: 300px;
    }
#JohnFainLinkText {
    display: flex;
    flex-direction: row;
    justify-content: left;
    margin-right: 100px;
    text-decoration: whitesmoke;
    text-decoration-line: none;
    font-family: 'Special Elite';
    color: darkred;
    font-size: 25px;
}
`

export class JohnPapPellomTwo extends Component {
  render() {
    return (
      <div>
        <PapTwoStyler>
        <ScrollAnimation animateIn="fadeInDown">
        <h1 id="PageHeader">John (Pap) Simpson Pellom</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
        <p class="PageText">This photograph was likely taken in Eton,
        GA. His second wife,</p>
        <p class="PageText">Martha (Green) Pellom was a midwife,
        and used the buggy to get</p>
        <p class="PageText"> around to take care of expectant 
        mothers. Pap died in 1935</p>
        <p class="PageText">at eighty-seven, and was buried
        in the Sumac Church Cemetery,</p>
        <p class="PageText">Cisco, GA.
        His second wife, Martha, and my father, Conard,</p>
        <p class="PageText"> and mother, Audie (Stout) 
        Pellom, are buried there near to each other.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft">
        <a id="JohnFainLink" href="http://www.moonshineon.com/1855_Profiles.pdf">Click here for information about Pap's father John Simpson Fain </a>
        <p id="JohnFainLinkText"> - his time in Georgia Legislature and a silhouette of him made in 1855.</p>
        </ScrollAnimation>
        </PapTwoStyler>
      </div>
    )
  }
}

export default JohnPapPellomTwo

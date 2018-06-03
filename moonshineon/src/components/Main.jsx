import React, { Component } from 'react'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll'


const MainStyler = styled.div`
background-image: url(https://i.imgur.com/nJgbPWy.jpg);
background-size: 100% 800px;
background-position-y: -100px 100px;
background-attachment: fixed;
background-repeat: no-repeat;
width: 100%;
height: 2800px;
padding-top: 350px;
border-bottom: solid black 35px;

#fadeInTextTop {
font-family: 'Special Elite';
color: white;
font-size: 45px;
}
#fadeInTextBottom {
font-family: 'Special Elite';
color: white;
font-size: 55px;
}
#mainTextOne {
  margin-top: 350px;
  font-family: 'Special Elite';
  color: white;
  font-size: 25px;
}
#mainTextTwo {
  margin-top: 550px;
  font-family: 'Special Elite';
  color: white;
  font-size: 25px;
}
`

export class Main extends Component {
  render() {
    return (
      <div>
        <MainStyler>
          <ScrollAnimation animateIn="fadeInDown">
            <h3 id="fadeInTextTop">A tale of my people - a proud people</h3>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp">
            <h4 id="fadeInTextBottom"> The Pelloms</h4>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <p id="mainTextOne">Purpose for this website: To leave some details
              of my life behind for interested family members now,
              and for those to come after me. The need, hunger and
              urge, to find out about my family before me, led me to
              believe that some of those to come later will have the
              same desire to "know" their people. I will discuss some
              of the stories I have uncovered about  my people back as
              far as my great-grandfather.  I plan to post information
            as I have developed it.   ~ Benny (Ben) Hill Pellom</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
          <p id="mainTextTwo">This scene, somewhere in Fannen County Georgia, is a 
            fitting backdrop and starting point  for me to relate some 
            of the things I have been able to learn about my people: Some
            of the Pelloms of North-east Georgia and South-east Tennessee.
            I won't get into genealogy here; I'll leave that for others.
            I'm simply going to relate some of the stories and impressions
            that have come my way about my people. Maybe my efforts will be
            rewarded by stimulating the younger Pelloms now making their way
            through life, to dig a little deeper, and find out who they really
            are. Many of them know little or nothing about their roots. I
            dedicate this website and its contents to them. Perhaps one or
            more of them will look back over time and use me, or another
            sibling, as a starting point to tell their younger ones a little
            about who they are. If anyone has a better copy of family photos
            I have posted on this site, as well as new photos and information,
            please contact me.</p>
            </ScrollAnimation>
        </MainStyler>
      </div>
    )
  }
}

export default Main

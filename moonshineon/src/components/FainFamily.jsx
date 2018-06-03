import React, { Component } from 'react'
import styled from 'styled-components'




const MountainStyler = styled.div`
background-image: url(https://i.imgur.com/HyqWWZa.jpg);
height: 800px;
width: 100%;
background-attachment:fixed;
background-position-x: -100px;
background-position-y: -250px;
#FeinLogo {
    margin-top: 200px;
    height: 425px;
    width: 1400px;
    margin-right: 100px;
}
`
const MainStyler = styled.div`
Height: 450px;
width: 100%;
background-color: whitesmoke;

#FainHeaderOne {
font-size: 35px;
font-family: 'Special Elite';
}
#FainTextOne{
font-size: 20px;
font-family: 'Special Elite';

}
`
const GraphicStylerOne = styled.div`
background-image: url(https://i.imgur.com/5yCsaXT.jpg);
height: 1200px;
width: 100%;
background-attachment: fixed;
background-position-y: -200px;
`
export class FainFamily extends Component {
  render() {
    return (
      <div>
        <MountainStyler>
            <img id="FeinLogo"src="https://i.imgur.com/3sB9XDN.gif" alt="FeinFamilyImageSource"/>
        </MountainStyler>
        <MainStyler>
<h1 id="FainHeaderOne">Some information about the Fain family that my grandfather John (Pap) Simpson Pellom 
 descended from, and a bit of information about his second wife, Martha Green, and her
 forbears:</h1>
 <p id="FainTextOne">It seems that about everyone I have met out in the flat lands of GA and southeast
    TN have a connection to Buncombe County, NC. That's the case with many of my forebears. 
    My Great-grandfather (through my father Conard Pellom), John Simpson Fain and his
    father, David Fain, his great-grandfather Ebenezer Fain, lived there. My great-grandmother
    (my father's matriarchal line)  Keziah (Kizzie) Green and her daughters Martha
    Green(my grandmother) and her sister Jo Ann Green, lived there. At some point Keziah
    married Dr. Henry W. Durham (a Confederate Physician). Input from my brother Doug
    Pellom indicates that this Dr. Durham was descended from the founder of Durham, NC.
    Certainly there must have been more siblings at every step of this family break-down,
    but I don't have information on them. I'll write a little about my Fain forebears
    involvement in the Revolutionary War in my next post.</p>
        </MainStyler>
        <GraphicStylerOne>

        </GraphicStylerOne>
      </div>
    )
  }
}

export default FainFamily

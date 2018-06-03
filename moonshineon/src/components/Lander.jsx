import React, { Component } from 'react'
import styled from 'styled-components'


const LanderStyler = styled.div`
 background-image: url("https://i.imgur.com/z8IxkFY.jpg");
/* Parallax Dimensions */
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 1950px; 
width: 100%;
padding-top: 100px;
}
#LanderLogo {
    font-family: 'Special Elite';
    color: whitesmoke;
    font-size: 125px;
    margin-bottom: 500px;
}
#LanderUnderLogo {
    font-family: 'Special Elite';
    font-size: 30px;
    color: whitesmoke;
}
`
export class Lander extends Component {
    render() {
        return (
            <div>
                <LanderStyler>
                    <h1 id="LanderLogo">MoonShine On</h1>
                    <p id="LanderUnderLogo">  Deep in the Georgia and Tennessee mountains
                    a noble and patriotic people struggled to raise
                    their families by planting crops on the mountainsides
                    and in the deep and narrow valleys and coves. Direct
                    sunlight on crops could be limited due to narrow and
                    deep mountain valley floors and hills, making it even
                    harder to bring crops to fruition. To provide clothing and shoes 
                    for their children, many people there, and throughout Appalachia,
                     produced a "cash crop" of moonshine whiskey and lugged barrels full 
                     of  it out of the mountains to "market." They did nothing morally wrong 
                     - it was simply a matter of survival to them. They cooperated with each 
                     other in order to outsmart the Government Tax Men, making it difficult
                    for them to get near a still without being detected well in advance.</p>
                </LanderStyler>
            </div>
        )
    }
}

export default Lander

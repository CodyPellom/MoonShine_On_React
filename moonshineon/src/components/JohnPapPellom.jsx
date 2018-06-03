import React, { Component } from 'react'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll'



const JohnPapStyler = styled.div`

background-image: url(https://i.imgur.com/ughooAy.png);
background-size: 100% 800px;
background-position-y: -100px 100px;
background-repeat: no-repeat;
width: 100%;
height: 1200px;
padding-top: 350px;
padding-bottom: 1500px;
background-color: black;
html, body {
    background-color: black;
}

#JohnPapTextOne {
    font-family: 'Special Elite';
    color: whitesmoke;
    font-size: 20px;
    margin-top: 250px;
    background-color: black;
    line-height: 200%;
}

#JohnPapTextTwo {
    font-family: 'Special Elite';
    color: whitesmoke;
    font-size: 20px;
    background-color: black;
    line-height: 200%;
    padding-top: 75px;
    padding-bottom: 100px;
}

#JohnPapTextThree {
  font-family: 'Special Elite';
    color: whitesmoke;
    font-size: 20px;
    background-color: black;
    line-height: 200%;
    padding-top: 100px;
    margin-top: -50px;
}


`
export class JohnPapPellom extends Component {
  render() {
    return (
      <div>
        <JohnPapStyler>
            <p id="JohnPapTextOne">I can only identify two of the people: 
            In the foreground are my grandfather, John
            Simpson Pellom (right) and my uncle  Benjamin
            Harrison Pellom (left). My grandfather couldn't
            read or write even though he was the son of a lawyer.
            He was born out of wedlock, and left to be raised by
            his young mother, Nancy Carter. His lawyer-father was
            a man named John Simpson Fain, a two-term Georgia State
            Representative and Confederate Officer from Union County,
            GA. My uncle Benjamin (I was named for him) went on to be
            a watch-maker/jeweler for a great part of his life. Most of
            his descendants are in California. I wish I could identify
            the others;  I feel that surely some of them are my kinsmen.
            Note: My grandfather John Simpson Pellom, was born 1848,
            and went by "Carter" as a last name, after his mother,
            until about 1890 when he changed his last name to Pellom,
            after his step-father Jacob (Jake) Pellom. Jake was said to
            have been raised in South Carolina.</p>

            <p id="JohnPapTextTwo">John (Pap) Simpson Pellom, born 1848: So far as I know he
            was an only-child, kept by his mother Nancy Carter, until he
            was about five years old. At that time Jacob (Jake) Pellom came
            into the picture as his step-father. Judging by the amount of
            home, shop and farm equipment shown on a Census Report, Jake
            Pellom was fairly well off. One story related to me was that he
            had a habit of keeping his gold and silver on his person. Doing
            that turned out to be a mistake, as he was robbed by Civil War
            guerrillas (deserters and outlaws) who roamed the mountains to prey
            on the people there, and to stay away from the Confederate authorities.
            Anyway, one day Jake and John (my grandfather) were walking on one
            of the many mountain trails when they were held up by the guerrillas.
            They took Jake's gold, silver and watch; they even took the coat off
            the boy, John (my grandfather).</p>

            <p id="JohnPapTextThree">John (Pap) Simpson Pellom first married Mary Thomas. From looking
            at a photo of the two, they both looked like they were in their late teens.
            Their marriage produced four boys that I know of, and they each used the
            surname "Carter" after their grandmother Nancy Carter.  Their names were: Robert
            (Bob) Carter; Jacob (Jake) Carter; James (Jim) Carter; and John Carter who
            died at about twenty-five. Bob and Jake (my half-uncles) were implicated in the 
            murder of a man by the name of William O. Keener, who lived in the mountains
            nearby. As a result of that, Bob and Jake fled westward to escape trial, and ended
            up living in Gypsum, Colorado. Both lived into their eighties. Bob has descendants 
            living there to this day. I was told that Jake had at least one child left living in
            Tennessee. James lived out nost of his life in Vero Beach, Florida, where he has 
            descendants there to this day. There is more to come regarding this murder,which also
            involved a great-uncle on my grandmother (Green) Pellom's side, and a nephew of this
            same grandmother.</p>
        </JohnPapStyler>
      </div>
    )
  }
}

export default JohnPapPellom

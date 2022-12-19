import React,{useEffect,useState} from 'react';
import { job } from '../../../data/job';
import './highlights.css'
import * as homeAction from '../../../Store/_redux/home/homeAction'
import {useSelector,useDispatch} from 'react-redux'
import './right.css'
import Slider from "react-styled-carousel";
import { sliderData } from "./data";
import leftArrow from '../../../assets/images/arrow-left.png'
import './right.css'
import {
  Container,
  Box,
  
} from "@material-ui/core";
// import "@fontsource/roboto";
import { makeStyles } from "@material-ui/core/styles";
const responsive = [
    { breakPoint: 1280, cardsToShow: 4 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
    { breakPoint: 760, cardsToShow: 2 },
  ];

const useStyles = makeStyles({
  boxContainer: {
   
    width: "100%",

    height: 140,
    borderRadius: 8,
    border: "solid 1px #ccc",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  name: {
    fontSize: 16,
    fontWeight: 600,
    textAlign: "center",
    letterSpacing: 0,
    color: "#0c482f",
    marginTop: 1,
    whiteSpace: "nowrap",
  },
  viewAll: {
    position: "absolute",
    right: 60,
    top: 30
  },
  root: {
    maxWidth: 350,
    height: 200,
    marginRight: 12
  },

  text: {
    paddingTop: 20,
    alignItems: "left"
  },
  card: {
   minWidth:160,
   maxWidth:215,
   height:64,
    margin: 3,
    position: "relative",
    marginRight: 10,
    backgroundColor:"#d5e5e039",
   
  },

});

function index(props) {
  
    const dispatch=useDispatch()
    const classes = useStyles();
    useEffect(()=>{
        dispatch(homeAction.getCompanies())
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    },[])
    const companies=useSelector((state)=>state.home.companies)

    console.log(companies)
    return (
        <div className='highlightsContainer'>
            <label className='titleTxt'>
                Öne çıkan iş ilanları
            </label>
          
            <Box className={classes.boxContainer}>
       
        
       <Container className={classes.wrapper}>
         <Slider   reponsive={responsive}   autoSlide={false} showDots={false} cardsToShow={6}>
           {job.map((item, i) => {
             return (
                <article key={item.id} style={{width:190,borderRightStyle:index!=job.length-1 ? 'solid':'none'}}>
                <span >
                    {item.name}
                </span>
                <label>
                    {item.company}
                </label>
                <img width={item.width} height={item.height} src={item.img}>
                </img>
            </article>
             );
           })}
         </Slider>
       </Container>
     </Box>
                
          
      


            
        </div>
    );
}

export default index;
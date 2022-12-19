import React from "react";
import Slider from "react-styled-carousel";
import { sliderData } from "./data";
import './right.css'
import {
  Container,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
// import "@fontsource/roboto";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  boxContainer: {
    margin: "0 auto",
    position: "relative",
    maxWidth: 855,
    height: 300,
    padding: 5,
    textAlign: "left"
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
    borderRadius:28
  },

});

const Hidden = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.boxContainer}>
       
        
        <Container className={classes.wrapper}>
          <Slider  autoSlide={false} showDots={false} cardsToShow={4}>
            {sliderData.map((item, i) => {
              return (
                <Card key={i} className={classes.card} >
                 
                  <CardContent  className={classes.name} >
                    <Typography className="subtitle_name" fontWeight={600} variant="subtitle2">
                      {item.name}
                    </Typography>
                   
                  </CardContent>
                </Card>
              );
            })}
          </Slider>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Hidden;

import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSliders'
import {job} from '../../../data/job'
import leftarrow from '../../../assets/images/left-arrow.png'
import rightarrow from '../../../assets/images/right-arrrow.png'


export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== job.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === job.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(job.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            <button
    
      className="btn-slide prev"
    >
      <img src={leftarrow} />
    </button>
            {job.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className="childslider_container"
                    >
                        <span>{obj.name}</span>
                        <span>{obj.company}</span>
                        <img 
                        src={obj.img}
                        />
                    </div>
                )
            })}
                
                <button
   
      className="btn-slide next"
    >
      <img src={rightarrow} />
    </button>

            {/* <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div> */}
        </div>
    )
}
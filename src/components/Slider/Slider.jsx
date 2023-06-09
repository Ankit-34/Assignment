import React, {useState} from 'react';
import data from '../../data/slider_img.js';
import Btnslider from './Btnslider';
import './Slider.css';

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(1);
    
    
    
    const nextSlide = () => {
        if (slideIndex !== data.length)
        setSlideIndex(slideIndex + 1)
        else if (slideIndex === data.length)
        setSlideIndex(1)
    }
    
    const prevSlide = () => {
        if (slideIndex !== 1)
        setSlideIndex(slideIndex - 1);
        else if (slideIndex === 1) setSlideIndex(data.length);
    }
    // useEffect(() => {
    //         nextSlide();
    //     }, []);
        
    // setInterval(nextSlide, 3000);
    return <>
        <div className='container_slider'>
            {
                data.map((d, index) => {
                    return <div className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'} key={d.id}>
                    <h1 className='overImg'>
                        {data[index].title}
                    </h1>
                        <img src={data[index].image} alt="back_image" className='back_img'></img>
                    </div>
                })
            }
            <Btnslider moveSlide={nextSlide} direction="next"/>
            <Btnslider moveSlide={prevSlide} direction="prev"/>
        </div>
    </>
}

export default Slider;
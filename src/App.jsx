import * as React from 'react';
import { useState , useEffect} from 'react';
import SideBar from './components/SideBar.jsx';
import NavBar from './components/NavBar.jsx';
// import Slider from './components/Slider.jsx';
import Slider from './components/Slider/Slider.jsx'
import Text from './components/Text';
import OurStory from './components/Our_Story/OurStory.jsx';
import Schedule from './components/Schedule/Schedule.jsx';
import card from './data/card.js';
import Form from './components/Form.jsx';
import './app.css';

export default function MyApp() {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    // dynamicHeight: window.innerHeight
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      // dynamicHeight: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])
  return (
    <>
      <div>
        {(window.innerWidth<900) ? <SideBar /> : <NavBar />}
        <Slider />  
      </div>
      <Text />
      {
        card.map((element)=>{
          const id = element.id;
          if(id%2===0)
          {
            return <>
              <Schedule data={element}/>
            </>
          }
          else{
            return <>
              <OurStory data={element}/>
            </>
          }
        })
      }
      <Form />

    </>
  );
}

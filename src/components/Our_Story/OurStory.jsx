import React from 'react';
import Img from './storyImg.jpg';
import './Our_story.css';

const OurStory = (data) => {
    return (
      <>
        <div className="our_story_container">
          <div className="story">
            <div>
              <h4>{data.data.title}</h4>
            </div>
            <p>
              {data.data.desc}
            </p>
          </div>

          <div className="storyImg">
            <img src={Img} alt="Story Img" />
          </div>
        </div>
      </>
    );
}

export default OurStory;
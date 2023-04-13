import React from 'react';
import Img from './scheduleImg.jpg';
import './schedule.css';

const Schedule = (data) => {
    return (
      <>
        <div className="opening_hours">
          <div className="left_side">
            <img src={Img} alt="Schedule_Img" />
          </div>

          <div className="right_side">
            <div>
                <h4>{data.data.title}</h4>
            </div>
            <p className='content'>
              {data.data.desc}
            </p>
          </div>
        </div>
      </>
    );
}

export default Schedule;
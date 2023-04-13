import React, {useState} from 'react';
import '../style/form.css';

const Form = () => {
    const init = {
        pickLoc: "",
        dropLoc: "",
        Date: "",
        Time: ""
    };
    const [data, setData] = useState(init);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value,
          });
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
      }

    return <>

      <div className='formTitle'>
        <h2>Book Now</h2>
      </div>

    <div className='Outer'>
    <form onSubmit={handleSubmit} className='form'>
        <div>
            <label>PickUp Location : </label>
            <input type='text' name='pickLoc' onChange={handleChange}></input>
        </div>
        <div>
            <label>Drop Location : </label>
            <input type='text' name='dropLoc' onChange={handleChange}></input>
        </div>
        <div>
            <label>Date : </label>
            <input type='date' name='Date' onChange={handleChange}></input>
        </div>
        <div>
            <label>Time : </label>
            <input type='time' name='Time' onChange={handleChange}></input>
        </div>
        <button type='submit'>Submit</button>
    </form>
    <div className='form_viewer'>
      <div className='pic'>
        <label for="picLoc">PickUp Location : </label>
        <p name="picLoc" className='picVal'>{data.pickLoc}</p>
      </div>
      <div className='drop'>
        <label for="dropLoc">Drop Location : </label>
        <p name="dropLoc" className='dropVal'>{data.dropLoc}</p>
      </div>
      <div className='date'>
        <label for="date">Date Location : </label>
        <p name="date" className='dateVal'>{data.Date}</p>
      </div>
      <div className='time'>
        <label for="time">Time Location : </label>
        <p name="time" className='timeVal'>{data.Time}</p>
      </div>
    </div>
    </div>

    
    </>
}

export default Form;


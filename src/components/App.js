
import React from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from 'react-redux';
import { nameValue, mailValue } from '../redux/action/action.creator'

const App = () => {
  let { userName, mail } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h1>User Information</h1>
        <label>Name:</label>
        <input type="text" onChange={(e) => { dispatch(nameValue(e.target.value)) }}></input>
        <br></br>
        <label>Email:</label>
        <input type="email" onChange={(e) => { dispatch(mailValue(e.target.value)) }}></input>
      </div>
      <div>
        <p>Current values in store:</p>
        <p>Name: {userName}</p>
        <p>Email: {mail}</p>
      </div>
    </div>
  )
}

export default App

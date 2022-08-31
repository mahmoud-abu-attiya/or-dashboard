import React from 'react'
import { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

const MissionCard = () => {
  const [miss, setmiss] = useState([]);
  useEffect(() => {
    const parse = jwtDecode(Cookies.get("token"))
    const data = parse.user;
    setmiss(data.services)
  }, []);
  return (
    <div className='car'>
      <h2>Missions</h2>
      {miss ? miss.map(m => {
        return(
          <div key={m.id}>{m}</div>
        )
      }) : (
        <h3 className='text-secondary'>There is no missions yet.</h3>
      )}
    </div>
  )
}

export default MissionCard
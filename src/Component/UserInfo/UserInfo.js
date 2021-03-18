import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './userInfo.css';
const UserInfo = (props) => {
    const {flag, name} = props.userinfo;

    const history = useHistory();
    const handlebtn = (cntId) =>{

      const url = `/countrys/${cntId}`;
      history.push(url);
    }
    //<Link to={`/countrys/${name}`}></Link>
    return (
        <div className="country-content">
          <div className="country-info">
            <img src={flag} alt="country"/>
            <h3>Country: {name}</h3>
              
              <button onClick={() => handlebtn(name)}className="btn-hero">Info</button>
            
          </div>
        </div>
    );
};

export default UserInfo;
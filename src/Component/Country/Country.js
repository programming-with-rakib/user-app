import React, { useEffect, useState } from 'react';
import UserInfo from '../UserInfo/UserInfo';
const Country = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() =>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []);
    let getUsers = users.slice(0, 12);

    return (

        <div>
            {
               getUsers.map(us => <UserInfo userinfo={us}></UserInfo>)
            }
        </div>
    );
};

export default Country;
import React from 'react';

import './UsersList.css';

export const UsersList = props => {

    const {users} = props;
    const lis = users.map((item, index) => {
        const avatarSource = `https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/${item.picture}`;
        return <div className="userContainer" key={String(index)}>
            <div className="avatarContainer">
                <img className="avatar" src={avatarSource} alt="avatar"/>
            </div>
            <div className="dataContainer">
                <p className="name">{item.first_name} {item.last_name}</p>
                <p className="userName">@{item.username}</p>
            </div>
        </div>
    })

    return (
        <div>
            <h1 className="header">Users List</h1>
            {lis}
        </div>
    )
}

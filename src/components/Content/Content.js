import React from 'react';
import { useState } from 'react';
import './Content.css';
import UserInfoContent from '../UserInfoContent/UserInfoContent';
import users from '../../userInfo';
import Header from '../Header/Header';

const Content = () => { 
        const [ friend, setFriend ] = useState([]);
        const addFriendHandle = (userInfo) => {
        const newFriend = [ ...friend, userInfo ];
        setFriend(newFriend);
        }
    return (
        <div className="content-body">
            <Header user = {friend}></Header>
            { users.map( user => <UserInfoContent  addFriendHandle = {addFriendHandle} userInfo = { user }></UserInfoContent>) }
        </div>
    );
};

export default Content;

import React from 'react';
import './Content.css';
import UserInfoContent from '../UserInfoContent/UserInfoContent';
import users from '../../userInfo';

const Content = () => { 
    return (
        <div className="content-body">
            { users.map( user => <UserInfoContent userInfo = { user }></UserInfoContent>) }
        </div>
    );
};

export default Content;

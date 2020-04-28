import React from 'react';
import './UserInfoContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const UserInfoContent = (props) => { 
    const { name, address, email, phone, yearSalary, photo } = props.userInfo;
    return (
            <div className="content-component">
                <div className="user-detail">
                    <p>Name: {name}</p>
                    <p>Address: {address}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Year Salary: {yearSalary}</p>
                    <div className="add-friend-button-div">
                    <button className="add-friend-button"><FontAwesomeIcon icon={faUserPlus} /> Add friend</button>
                    </div>
                </div>
                <div className="user-pic">
                    <img src = { photo } alt = "user_photo" />
                </div>
            </div>
    );
};

export default UserInfoContent;

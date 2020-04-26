import React from 'react';
import './Content.css';

const Content = () => { 
    return (
        <div className="content-body">
            <div className="content-component">
                <div className="user-detail">
                    <p>Name: </p>
                    <p>Address: </p>
                    <p>Email: </p>
                    <p>Phone: </p>
                    <p>Year Salary: </p>
                    <button className="add-friend-button">Add friend</button>
                </div>
                <div className="user-pic">
                    <h1>Here will be pic.</h1>
                </div>
            </div>
        </div>
    );
};

export default Content;

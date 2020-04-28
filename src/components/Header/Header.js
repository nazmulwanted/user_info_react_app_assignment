import React from 'react';
import './Header.css';
const Header = (props) => {
    const addedFriend = props.user;
    const totalYearSalary = addedFriend.reduce((total, frnd) => total + frnd.yearSalary, 0);
    return (
        <div className="header-container">
            <p>Number of friends added: {addedFriend.length} 
               <br />
               Yearly Salary in Total: {totalYearSalary} 
            </p>
        </div>
    );
};

export default Header;

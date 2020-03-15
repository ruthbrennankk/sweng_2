import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

import NavigationBar from './components/NavigationBar.jsx';
import './ProfilePage.css';

const testName = "John Doe";
const testPoints = 0;

class ProfilePage extends Component {
    render() {
        return (
            <div>
                Profile
                <NavigationBar />
                <div className="ProfileDetails">Name: {testName}</div>
                <div className="ProfileDetails">Points: {testPoints}</div>
            </div>
        );
    }
}
export default ProfilePage;
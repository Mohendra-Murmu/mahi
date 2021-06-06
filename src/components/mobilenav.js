import React, { useState } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import { Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';


export default function MobileNav() {

  const [value, setValue] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper>
      <BottomNavigation value={value} onChange={handleChange} >
        <BottomNavigationAction component={Link} to='/' label="Home" value="home" icon={<HomeIcon />} />
        <BottomNavigationAction component={Link} to='/about' label="About" value="about" icon={<InfoIcon />} />
        <BottomNavigationAction component={Link} to='/contact' label="Contact" value="contact" icon={<ContactMailIcon />} />
        <BottomNavigationAction component={Link} to='/projects' label="Projects" value="projects" icon={<AccountTreeIcon />} />
      </BottomNavigation>
    </Paper>
  );
}

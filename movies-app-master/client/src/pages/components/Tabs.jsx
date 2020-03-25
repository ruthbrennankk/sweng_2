import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import EqualizerIcon from '@material-ui/icons/EqualizerOutlined';
import DescriptionIcon from '@material-ui/icons/DescriptionOutlined';
import VideocamIcon from '@material-ui/icons/VideocamOutlined';
import PeopleIcon from '@material-ui/icons/PeopleAltOutlined';
import ChatIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import { Link } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    //flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: "100vh"         //should set tab drawer height to size of screen
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },


  /*-----HARDCODED VALUE-----*/
  tabsRoot: {
    minWidth: 70,
    width: 70,
    color: "#9545d8"
  },
}));


export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        classes={{root: classes.tabsRoot }}
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        indicatorColor="primary"
      >
        
        <Tab icon={<HomeIcon />} 
            style={{marginTop: 70}}             //-----HARDCODED VALUE-----
            classes={{root: classes.tabsRoot }} 
            component={Link} to="/home" 
            {...a11yProps(0)} />
        <Tab icon={<EqualizerIcon />} 
            classes={{root: classes.tabsRoot }} 
            component={Link} to="/dashboard" 
            {...a11yProps(1)} />
        <Tab icon={<DescriptionIcon />} 
            classes={{root: classes.tabsRoot }}
            component={Link} to="/articles" 
            {...a11yProps(2)} />
        <Tab icon={<VideocamIcon />} 
            classes={{root: classes.tabsRoot }}
            component={Link} to="/articles"  
            {...a11yProps(3)} />
        <Tab icon={<PeopleIcon />} 
            classes={{root: classes.tabsRoot }}
            component={Link} to="/profile" 
            {...a11yProps(4)} />
        <Tab icon={<ChatIcon />} 
            classes={{root: classes.tabsRoot }}
            //component={Link} to="/home"  
            {...a11yProps(5)} />
        <Tab icon={<SettingsIcon />} 
            classes={{root: classes.tabsRoot }}
            component={Link} to="/settings"  
            {...a11yProps(6)} />
      </Tabs>
      
      {/*
      <TabPanel value={value} index={0} >></TabPanel>
      
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      */}
    </div>
  );
}
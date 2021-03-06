import React from 'react';
import { Box, Text, Heading, Image } from 'gestalt';
import { NavLink } from "react-router-dom";

const Navbar = () => (
    <Box 
        display="flex" 
        alignItems="center" 
        justifyContent="around" 
        height={78} 
        color="midnight" 
        padding={1} 
        shape="roundedBottom"
    >
        <NavLink activeClassName="active" to="/signin"> 
            <Text size="xl" color="white"> Sign In </Text>
        </NavLink>

        <NavLink activeClassName="active" exact to="/"> 
        <Box display="flex" alignItems="center">
            <Box margin={2} height={50} width={50}>
                <Image src="./icons/logo.svg" alt="Logo" naturalWidth={1} naturalHeight={1}/>
            </Box>
            <Heading size="xs" color="orange"> BrewHaha </Heading>
        </Box>
        </NavLink>

        <NavLink activeClassName="active" to="/signup"> 
            <Text size="xl" color="white"> Sign Up </Text>
        </NavLink>

    </Box>
)

export default Navbar;
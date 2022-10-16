import React from 'react';
import { Outlet } from 'react-router-dom';
import Heading from '../Components/Heading/Heading';

const Main = () => {
    return (
        <div>
            <Heading></Heading>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
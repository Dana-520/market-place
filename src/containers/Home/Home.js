import { Grid } from '@material-ui/core';
import React from 'react';
import Content from './Content'
import Sidebar from './Sidebar'

const Home = () => {
    return (
        <Grid container spacing={2}>
            <Sidebar />
            <Content />
        </Grid>
    );
};

export default Home;
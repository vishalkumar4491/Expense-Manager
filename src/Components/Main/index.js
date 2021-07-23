import React, { useState, useEffect, useContext } from 'react';
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core'

import { ExpenseTrackerContext } from '../../Context/context';
import InfoCard from '../InfoCard'

import useStyles from './styles'
import Form from './Form'
import List from './List'

const Main = () => {

    const classes = useStyles()
    const { balance } = useContext(ExpenseTrackerContext)

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Track your Expenses with just your Voice" />

            <CardContent>
                <Typography align="center" variant="h5">Total Balance ₹{balance}</Typography>
                
                <Typography align="center" variant="subtitle2" style={{lineHeight: '1.5em', marginTop:'20px'}}>
                    <InfoCard />
                </Typography>

                <Divider className={classes.divider}/>
                <Form />
            </CardContent>

            <CardContent className={classes.CardContent}>
                <Grid container spacing={2}>
                    <List />
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main

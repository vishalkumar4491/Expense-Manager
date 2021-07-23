import React, {useRef, useEffect} from 'react'
import './App.css';
import {Grid} from '@material-ui/core'
import { SpeechState, useSpeechContext } from '@speechly/react-client';

import {PushToTalkButton, PushToTalkButtonContainer, ErrorPanel} from '@speechly/react-ui'

import Details from './Components/Details';
import Main from './Components/Main'

import useStyles from './styles'

function App() {
  const {speechState} = useSpeechContext()
  const classes = useStyles()
  const main = useRef(null)

  const executeScroll = () => main.current.scrollIntoView()
  useEffect(() => {
    if(speechState === SpeechState.Recording){
      executeScroll()
    }
  })
  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems='center' justify='center' style={{height: '100vh'}}>
        <Grid item xs={12} sm={3} className={classes.mobile}>
          <Details title='Income' />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.desktop}>
          <Details title='Income' />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.last}>
          <Details title='Expense' />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import youtube  from "./api/youtube";
import {Search_bar , Video_details} from './Components/Index';


function App() {
  return (
    <div className="App">

    <Grid item xs={12}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Search_bar/>

            <Grid item xs = {8}> 
            
              <Video_details/>

            </Grid>
            <Grid item xs = {4}> 

              {/* video list */}

            </Grid>

        </Grid>

      </Grid>
      
    </Grid>
        
    </div>
  );
}

export default App;

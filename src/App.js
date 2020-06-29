import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import youtube  from "./api/youtube";
import {SearchBar , VideoDetails} from './Components/Index';


class  App extends React.Component {
  state={
    video : [] ,
    selectedVideo: null,
   }


  handleSubmit = async ( searchTerm ) => {
  const response = await youtube.get('search' , 
  {    
    params:{
    part:'snippet',
    maxResults:'5',
    key:  'AIzaSyCFAkM1zkw1MGKKGyusi7LdDBo7jMNvlIQ',
    q: searchTerm,
    }
        
  }); 
  this.setState({ videos: response.data.items , selectedVideo: response.data.items[0] })
  console.log(response.data.items);
  

}
 render(){

  const { selectedVideo } = this.state;
  return (
    <div className="App">

    <Grid item xs={12}>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <SearchBar onFormSubmit={this.handleSubmit}/>

            <Grid item xs = {8}> 
            
              <VideoDetails video = {selectedVideo}/>

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
}

export default App;

import React, { Component } from 'react';
import {Paper , TextField } from '@material-ui/core'

class Search_bar extends Component {
    state={
        searchTerm:""
    }

    handleChange = (e) =>{
               
        this.setState({searchTerm : e.target.value})
    }
    handleSubmit = ( ) => {
        
    }
    render() {
        return (
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label='search' onChange={this.handleChange}/>
                </form>
            </Paper>
        );
    }
}

export default Search_bar;
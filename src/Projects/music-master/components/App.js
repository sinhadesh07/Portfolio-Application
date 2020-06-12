import React, {Component} from 'react';
import Artist from './Artist'
import Tracks from './Tracks'
import Search from './Search'


const API_ADDRESS ="https://spotify-api-wrapper.appspot.com";


class App extends Component{

  state={artistDetails:null,tracks:[]}

 
  
  searchArtist=artistQuery=>{
    console.log(this.state)
    fetch(`${API_ADDRESS}/artist/${artistQuery}`)
    .then(response=>response.json())
    .then(json=>{
     console.log('json', json)
    if(json.artists.total>0)
     {
        const artist=json.artists.items[0];
        this.setState({artistDetails:artist});

        fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
        .then(response=>response.json())
        .then(json=> this.setState({tracks:json.tracks}))
        .catch(error=>alert(error.message));
     }
      
     } )
     .catch(error=>alert(error.message));

  }

  

 

    render(){
      console.log('state',this.state)
      return(
          <div>
            <h2>Music Master</h2>
            <Search   searchArtist={this.searchArtist} />
            <hr />
            <Artist artist={this.state.artistDetails} />
            <hr />
            <Tracks tracks={this.state.tracks} />
          </div>
         
      )
    }
        
}



export default App;
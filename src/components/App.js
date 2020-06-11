import React, {Component} from 'react';
import Projects from './Projects'
import SocialProfiles from './SocialProfiles'
import profile from '../assets/Profile.jpg'
import Title from './Title'
import Jokes from './Jokes'
import Header from './Header'

class App extends Component{

  state={displayBio:false};
  // constructor(){
  //   super();
  //   this.state={displayBio: false};
  //   this.toggleDisplay=this.toggleDisplay.bind(this);

    
  // }


  toggleDisplay = () => {
    this.setState({displayBio:!this.state.displayBio});
  }

    render(){
      return(
          <div>
            <Header />
            <img src={profile} alt='profile' className='profile' />
          <h1>Hello !</h1>
          <p>My name is Adesh Sinha</p>
          
          <Title /> 
          
          
         { 
          this.state.displayBio ? (
            <div>
            <p>I live in Praygraj, sangam city.</p>
            <p>Currently working in TCS as developer.</p>
            <button onClick={this.toggleDisplay}>Show Less</button>
            </div>
          ) :(
            <div>
              <button onClick={this.toggleDisplay}>Read more</button>
            </div>
          )
      
          }
           <hr />
          <Projects />
          <hr />
          <SocialProfiles />
          
          </div>
         
      )
    }
        
}



export default App;
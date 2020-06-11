import React,{ Component } from 'react'

const TITLES=[
' a software developer',
' enthusiast learner',
'currently working at TCS'
];

class Title extends Component{

    state={titleIndex:0,fadeIn:true}

    componentDidMount(){
        setTimeout(()=>{
            this.setState({fadeIn:false})
        },2000)
        this.animateTitles();
    }

    componentWillUnmount(){
        clearInterval(this.titleIndex);
    }

    animateTitles=()=>{
      this.titleIndex= setInterval( ()=>{
           const titleIndex=(this.state.titleIndex+1)%TITLES.length;
           this.setState({titleIndex,fadeIn:true})
        
        
         
         setTimeout(()=>{
            this.setState({fadeIn:false})
        },2000)},4000)
         
    }

    render(){

        const {fadeIn,titleIndex}=this.state
        const title=TITLES[titleIndex]
        return(
        <p className={fadeIn ? 'title-fade-in':'title-fade-out'} >I am {title}</p>
        )
        
}
}

export default Title

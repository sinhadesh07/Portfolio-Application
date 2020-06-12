import React , {Component} from 'react'

class Tracks extends Component{

    state={palying:false,audio:null,preview_url:null}

    // componentWillUpdate(){
    //     const audio=new Audio(this.state.previewUrl)
    //     audio.pause();
    //     this.setState(()=>({palying : false}))
    // }
    playAudio=previewUrl=>()=>{

        const audio=new Audio(previewUrl)

        if(!this.state.palying)
        {
            audio.play();
            this.setState({palying:true,audio,preview_url:previewUrl})
        }else{
            this.state.audio.pause()

            if(this.state.preview_url===previewUrl)
            {
                audio.pause()
                this.setState({palying:false})
            }
            else{
                audio.play()
                this.setState({audio,preview_url:previewUrl})
            }
        }

    }

    trackIcon=track=>{
        if(this.state.palying &&
            this.state.preview_url===track.preview_url)
            {
                return <span>| |</span>;
            }
          else
          {
            return <span>&#9654;</span>;
          }
          
    }

    render(){
        const{tracks}=this.props

        return(
            <div>
                {
              tracks.map((track)=>{
                  const {id,name,album,preview_url}=track;
                  return(
                      <div
                       key={id} className='tracks'>
                        <img onClick={this.playAudio(preview_url)} src={album.images[0].url} alt='profiel' className='tracks-img'></img>
                     <p className='tracks-name'>{name}</p>
                  <p className='track-icon'>{this.trackIcon(track)}</p>
                      </div>
                  )

              })
            }

            </div>
        )
    }
}

export default Tracks
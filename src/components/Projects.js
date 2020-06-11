import React,{ Component } from 'react';
import  PROJECTS from '../data/projects';
import '../Projects.css'

const Project = (props) =>{
    

        const{title,image,description,link}=props.project;
        return(
            <div  style={{display : 'inline-block',width:300,margin:30}}>
               <h3>{title}</h3>
               <img src={image} alt='profile'style={{width:200,height:100}}/>
        <p>{description}</p>
        <a href={link}>{link}</a>
                           </div>
        )
    
}

const Projects =()=>(
            <div className="project">
                <h2>Highlighted projects</h2>
            
            <div>
                {
                PROJECTS.map((PROJECT)=>(
                        <Project key={PROJECT.id} project={PROJECT} />
                    )
                )
            }

            </div>
            </div>
        )
    


export default Projects;
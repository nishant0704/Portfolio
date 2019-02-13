import React,{Component} from 'react';

class Projects extends Component{
  constructor(props){
    super(props);
    this.state={
      projects:[
        {
          id:1,
          title:'Calculator',
          description:'A Simple Javascript Calculator application demonstrating all the functionalities of a normal Calculator.',
          image:'',
          technology:'HTML,CSS,JavaScript,Git'
        },
        {
          id:2,
          title:'ColorGuess',
          description:'A Javascript application focussing on DOM functionalties which randomly generates color and each time a wrong color is picked options are reduced to pick from ,upon selecting the correct color success message is diplayed with the correct color.',
          image:'',
          technology:'HTML,CSS,JavaScript,Git'
        },
        {
          id:3,
          title:'GamesDB',
          description:'A React application focussing on displaying data dynamically of various Games and a SearchBar component to search from the available games along with a Popup feature which showcases more information. ',
          image:'',
          technology:'JavaScript,CSS,React,MaterialDesignBootstrap,Git'
        },
      ]
    }
  }
  render(){
    return(
      <div>
        <h2>My Projects</h2>
        <div className="d-flex flex-wrap justify-content-center">
        {
          this.state.projects.map( project =>{
            return(
              <div key={project.id} style={{width:'40%'}}>
                <div className="card">
                  {project.title}
                  <hr/>
                  {project.technology}
                </div>
              </div>
            );
          })
        }
       </div>
      </div>
    );
  }
}

export default Projects;

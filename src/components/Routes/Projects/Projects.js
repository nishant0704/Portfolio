import React,{Component} from 'react';
import Color from '../../../Images/ColorGuess.png';
import Game from '../../../Images/GameDB.png';
import Burger from '../../../Images/Burger-Builder.png';
import Weather from '../../../Images/weather-data.png';
import Calculator from '../../../Images/Calculator.png';
class Projects extends Component{
  constructor(props){
    super(props);
    this.state={
      projects:[
        {
          id:1,
          title:'ColorGuess',
          description:'A Javascript application focussing on DOM properties which randomly generates color and each time a wrong color is picked options are reduced ,game ends or can be reset upon selecting the correct color.',
          image:Color,
          technology:'HTML,CSS,JavaScript,Git'
        },
        {
          id:2,
          title:'GamesDB',
          description:'A React application focussing on displaying data dynamically of various Games and a SearchBar component to search from the available games along with a Popup feature which showcases more information. ',
          image:Game,
          technology:'JavaScript,CSS,React,MaterialDesignBootstrap,Git'
        },
        {
          id:3,
          title:'BurgerMaker',
          description:'A React application focussing on all the concepts of React where ingredients are added dynamically along with their total price and also includes routing for the checkout component of the application. ',
          image:Burger,
          technology:'JavaScript,CSS,React,React-Router,Git'
        },
        {
          id:4,
          title:'WeatherApp',
          description:'A React application focussing on axios / async and await feature to fetch data from an API and render dynamically, Live weather and additional data is displayed for the city searched. ',
          image:Weather,
          technology:'JavaScript,CSS,React,Axios,Bootstrap,Git'
        },
        {
          id:5,
          title:'Calculator',
          description:'A Simple Javascript Calculator application demonstrating all the functionalities of a normal Calculator.',
          image:Calculator,
          technology:'HTML,CSS,JavaScript,Git'
        },
      ],
      clicked:false
    }
  }

  componentDidMount(){
    window.$('[data-toggle="tooltip"]').tooltip();
  }

  toggle(id){
    this.setState( state => ({
      clicked: id === state.clicked ? '' : id
    }));
  }
  render(){
    return(
      <div>
        <h2>My Projects</h2>
        <div className="d-flex flex-wrap justify-content-center">
        {
          this.state.projects.map( (project, i) =>{
            return(
              <div key={i} className="project-card-wrapper" style={{width:'40%'}}>
                <div className="card m-3 bg-dark text-light">
                  <img className="img-thumbnail bg-dark" style={{width:'auto',height:'280px'}}src={project.image} alt="respective ss"/>
                  <p className="mt-2 lead mb-2">{project.title}</p>
                  <hr className="mt-0 bg-light"/>
                  <p className="mb-0 text-left ml-1">Description : {project.description} </p> <br/>
                  <button style={{width:'10%',alignSelf:'center',fontSize:'20px',border:'none',outline:'none',backgroundColor:'transparent',cursor:'pointer'}} onClick={() => this.toggle(project.id)}>
                  {this.state.clicked === project.id ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down" data-toggle="tooltip" data-placement="right" title="Technology Used"></i>}
                  </button>
                  {this.state.clicked === project.id  ? project.technology : ''}
                </div>
              </div>
            );
          })
        }
       </div>
       <div>For More Projects , Please visit my GitHub Page.</div>
      </div>
    );
  }
}

export default Projects;

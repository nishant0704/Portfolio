import React,{Component} from 'react';
import HTML5 from '../../../Images/HTML5.png';
import CSS3 from '../../../Images/CSS3.png';
import JS from '../../../Images/Javascript.png';
import Bootstrap from '../../../Images/bootstrap.png';
import MDB from '../../../Images/MDB.png';
import Reactjs from '../../../Images/React.png';
import Git from '../../../Images/Git.png';
import Atom from '../../../Images/Atom.png';
import DevTools from '../../../Images/Chrome-Dev-Tools.png';
import './Skills.css';

class Skills extends Component{
  constructor(props){
    super(props);
    this.state={
      skills:[
        {id:1,image:HTML5,name:'HTML'},
        {id:2,image:CSS3,name:'CSS'},
        {id:3,image:JS,name:'JavaScript'},
      ],
      FrameWorks:[
        {id:4,image:Bootstrap,name:'Bootstrap'},
        {id:5,image:MDB,name:'MaterialDesignBootstrap'},
        {id:6,image:Reactjs,name:'React'},
      ],
      Tools:[
        {id:7,image:Git,name:'Git'},
        {id:8,image:Atom,name:'Atom'},
        {id:9,image:DevTools,name:'ChromeDeveloperTools'}
      ]
    }
  }
  render(){
    return(
      <div>
        <h3 className="mt-2">Skills</h3>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
        {
          this.state.skills.map( skill => {
            return(
              <div className="skills-container card bg-dark mr-3 ml-3 mt-2 mb-2" key={skill.id}>
                  <img style={{height:'200px'}} src={skill.image} alt="dumy" className="image-wrapper my-auto"/>
              </div>
            );
          })
        }
        </div>
        <h3 className="mt-2">Frameworks</h3>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
        {
          this.state.FrameWorks.map( framework => {
            return(
              <div className="skills-container card bg-dark mr-3 ml-3 mt-2 mb-2" key={framework.id}>
                  <img src={framework.image} alt="dumy" className="image-wrapper my-auto"/>
              </div>
            );
          })
        }
        </div>
        <h3 className="mt-2">Tools & Technologies</h3>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
        {
          this.state.Tools.map( tool => {
            return(
              <div className="skills-container card bg-dark mr-3 ml-3 mt-2 mb-2" key={tool.id}>
                  <img src={tool.image} alt="dumy" className="image-wrapper my-auto"/>
              </div>
            );
          })
        }
        </div>
      </div>
    );
  }
}

export default Skills;

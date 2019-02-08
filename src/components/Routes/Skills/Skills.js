import React,{Component} from 'react';
import './Skills.css';

class Skills extends Component{
  constructor(props){
    super(props);
    this.state={
      skills:[
        {id:2,image:'https://seeklogo.com/images/H/html5-with-wordmark-color-logo-4259B7F24F-seeklogo.com.png',name:'HTML'},
        {id:3,image:'https://vignette.wikia.nocookie.net/howtoprogram/images/a/a9/CSS3.png/revision/latest?cb=20130422012035',name:'CSS'},
        {id:4,image:'https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png',name:'JavaScript'},
      ],
      FrameWorks:[
        {id:6,image:'https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png',name:'Bootstrap'},
        {id:7,image:'https://avatars3.githubusercontent.com/u/20553039?s=460&v=4',name:'MaterialDesignBootstrap'},
        {id:8,image:'https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png',name:'React'},
      ],
      Tools:[
        {id:10,image:'https://seeklogo.com/images/G/git-logo-CD8D6F1C09-seeklogo.com.png',name:'Git'},
        {id:11,image:'https://seeklogo.com/images/A/atom-logo-19BD90FF87-seeklogo.com.png',name:'Atom'},
        {id:12,image:'https://seeklogo.com/images/C/chrome-logo-D5FECB59EF-seeklogo.com.png',name:'DeveloperTools'}
      ]
    }
  }
  render(){
    return(
      <div>
        <h3>Skills</h3>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
        {
          this.state.skills.map( skill => {
            return(
              <div className="skills-container" key={skill.id}>
                  <img src={skill.image} alt="dumy" className="image-wrapper card p-relative"/>
              </div>
            );
          })
        }
        </div>
        <h3>Frameworks</h3>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
        {
          this.state.FrameWorks.map( framework => {
            return(
              <div className="skills-container" key={framework.id}>
                  <img src={framework.image} alt="dumy" className="image-wrapper card p-relative"/>
              </div>
            );
          })
        }
        </div>
        <h3>Tools & Technologies</h3>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
        {
          this.state.Tools.map( tool => {
            return(
              <div className="skills-container" key={tool.id}>
                  <img src={tool.image} alt="dumy" className="image-wrapper card p-relative"/>
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

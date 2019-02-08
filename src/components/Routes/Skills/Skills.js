import React,{Component} from 'react';

class Skills extends Component{
  constructor(props){
    super(props);
    this.state={
      skills:[
        {name:'HTML'},
        {name:'CSS'},
        {name:'Javascript'}
      ],
      FrameWorks:[
        {name:'Bootstarp'},
        {name:'MaterialDesignBootstarp'},
        {name:'React'}
      ],
      ToolsNTechnologies:[
        {name:'Git'},
        {name:'Atom'},
        {name:'ChromeDeveloperTools'}
      ]
    }
  }
  render(){
    return(
      <div>
        {
          this.state.skills.map( skill => {
          return(
            <div>
              {skill.name}
            </div>
          );
        })
      }
      {
        this.state.FrameWorks.map( framework => {
          return(
            <div>
              {framework.name}
            </div>
          );
        })
      }
      {
        this.state.ToolsNTechnologies.map( tool => {
          return(
            <div>
              {tool.name}
            </div>
          );
        })
      }
      </div>
    );
  }
}

export default Skills;

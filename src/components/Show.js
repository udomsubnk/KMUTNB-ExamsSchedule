import React from'react'
export default class Show extends React.Component{

  selectCourse(id){
    console.log(id);
  }
  render(){
    return(

      <button type="button" className="list-group-item" >{this.props.data.name}</button>
    )
  }
}

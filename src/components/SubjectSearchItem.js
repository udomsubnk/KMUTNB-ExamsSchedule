import React from'react'

export default class SubjectSearchItem extends React.Component{
  render(){
    return(
      <button type="button" className="list-group-item" >{this.props.data.course_id} - {this.props.data.name}</button>
    )
  }
}

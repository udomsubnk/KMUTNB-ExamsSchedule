import React from 'react'

class ListChildren extends React.Component{
  render(){
    const { username,name,position } = this.props.userItem
    return(
      <div className="col-md-6">
        <h1>{username}</h1>
        <h1>{name}</h1>
        <h1>{position}</h1>
        <hr/>
      </div>
    )
  }
}
export default ListChildren

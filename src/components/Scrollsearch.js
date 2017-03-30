import React from'react'
export default class Scrollsearch extends React.Component{


  render(){
    return(
      <div className="list-group searchDown">
        {this.props.children}
      </div>

    )
  }
}

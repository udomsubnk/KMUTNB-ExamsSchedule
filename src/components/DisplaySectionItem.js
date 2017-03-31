import React from 'react'

export default class DisplaySectionItem extends React.Component{
  render(){
    const { sectionName } = this.props
    return(
      <div className="col-xs-2">
        <div className="card text-center secCard" >
          <div className="card-block">
            <h4 className="card-title">{ sectionName.section }</h4>
            <p className="card-subtitle mb-2 " styles="font-weight: bold">{ sectionName.day }</p>
            <p className="card-text">{ sectionName.time }</p>
          </div>
        </div>
      </div>
    )
  }
}

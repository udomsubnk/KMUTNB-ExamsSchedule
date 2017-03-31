import React from 'react'

export default class OptionDropdownItem extends React.Component{
  render(){
    const { currentNameprops } = this.props
    return(
      <option>{currentNameprops.curr_name}</option>
    )
  }
}

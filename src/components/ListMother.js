import React from 'react'
import ListChildren from './ListChildren'
export default class ListMother extends React.Component{
  constructor(){
    super()
    this.state={
      users:[]
    }
  }
  componentDidMount(){
    const { users } = this.state
    fetch(`http://localhost:3000/user`)
    .then(res=> res.json())
    .then( users =>{
      this.setState({
        users: users
      })
    })

  }
  render(){

    const { users } = this.state
    const Show = users.map(users =>
        <ListChildren key={ users.id } userItem={ users } />
      )

    return(
      <div className="container">
        <div className="row">
          
        </div>
      </div>
    )
  }
}

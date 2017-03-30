import React from'react'
import ListMother  from './components/ListMother'
import Pageone from './components/Pageone'
import Pagetwo from './components/Pagetwo'
import Pagethree from './components/Pagethree'

import Header from './Header'
class Main extends React.Component{
  constructor(){
    super()
    this.state={
      showReplyPageone:true,
      showReplyPagetwo:false,
      showReplyPagethree:false,

    }
    this.goPagetwo = this.goPagetwo.bind(this)
    this.goPagethree = this.goPagethree.bind(this)
  }
  goPagetwo(){

    const { showReplyPageone,showReplyPagetwo,showReplyPagethree,val } = this.state
    console.log();
    this.setState({
      showReplyPageone:false,
      showReplyPagetwo:true,
      showReplyPagethree:false

    })

  }
  goPagethree(){
    const { showReplyPageone,showReplyPagetwo,showReplyPagethree } = this.state
    this.setState({
      showReplyPageone:false,
      showReplyPagetwo:false,
      showReplyPagethree:true
    })
  }
  render(){
    const { showReplyPageone,showReplyPagetwo,showReplyPagethree } = this.state
    return(
      <div>
        { showReplyPageone && <Pageone gotwo={ this.goPagetwo }/> }
        { showReplyPagetwo && <Pagetwo gothree={ this.goPagethree }/> }
        { showReplyPagethree && <Pagethree/> }
      </div>

    )
  }
}
export default Main;

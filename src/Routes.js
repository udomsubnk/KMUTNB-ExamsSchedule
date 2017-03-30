import React from'react'
import ReactRouter,{ Router,Route,browserHistory,IndexRoute } from 'react-router'
import Main from './Main'
import Pageone from './components/Pageone'
class Routes extends React.Component{
  render(){
    return(
      <Router history={browserHistory}>
        <Route path='/ggwp' component={Main}>
          
        </Route>
      </Router>
    )
  }
}

export default Routes;

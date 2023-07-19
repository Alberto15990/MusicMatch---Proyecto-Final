import Login from '../pages/Login'
import Start from '../pages/Start'
import { Redirect, Route, Switch } from 'wouter'




const App =() => {

  return (
    <div>
     
      <Switch>
      <Route path= "/start" component={Start}/>
      <Route path='/login' component={Login}/>
      <Redirect to='/login'/>
      </Switch>
    </div>
  )
}


export default App

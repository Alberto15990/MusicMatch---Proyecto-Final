import Login from '../pages/Login'
import Start from '../pages/Start'
import Register from '../pages/Register'
import { Redirect, Route, Switch } from 'wouter'



const App =() => {

  return (
    <div>
     
      <Switch>
      <Route path= "/start" component={Start}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
      <Redirect to='/login'/>
      </Switch>
    </div>
  )
}


export default App

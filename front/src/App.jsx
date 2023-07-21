import Login from '../pages/Login'
import Start from '../pages/Start'
import Register from '../pages/Register'
import { Redirect, Route, Switch } from 'wouter'
import Provider from '../context/Provider'


const App = () => {

  return (
    <div>
      <Provider>
        <Switch>
          <Route path="/start" component={Start} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Redirect to='/login' />
        </Switch>
      </Provider>
    </div>
  )
}


export default App

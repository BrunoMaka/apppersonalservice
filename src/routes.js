import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomeScreen from './screens/home';
import ChoiceScreen from './screens/choice'
import MainUserScreen from './screens/users/main_user'
import ProfUserScreen from './screens/users/prof_user'
import LocalUserScreen from './screens/users/local_user'
import MainUserLoginScreen from './screens/auth/main_user/login'
import MainUserRegisterScreen from './screens/auth/main_user/register'
import ProfUserLoginScreen from './screens/auth/prof_user/login'
import ProfUserRegisterScreen from './screens/auth/prof_user/register'
import LocalUserLoginScreen from './screens/auth/local_user/login'
import LocalUserRegisterScreen from './screens/auth/local_user/register'


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomeScreen}/>
      <Route exact path='/choice' component={ChoiceScreen}/>
      <Route exact path='/main_user' component={MainUserScreen}/>
      <Route exact path='/prof_user' component={ProfUserScreen}/>
      <Route exact path='/local_user' component={LocalUserScreen}/>      
      <Route exact path='/main_users/login' component={MainUserLoginScreen}/>
      <Route exact path='/main_users/register' component={MainUserRegisterScreen}/>
      <Route exact path='/prof_users/login' component={ProfUserLoginScreen}/>
      <Route exact path='/prof_users/register' component={ProfUserRegisterScreen}/>
      <Route exact path='/local_users/login' component={LocalUserLoginScreen}/>
      <Route exact path='/local_users/register' component={LocalUserRegisterScreen}/>
      
    </Switch>
  </BrowserRouter>
)

export default Routes;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Router,Switch,Route} from 'react-router-dom'
import './index.css'
import Jokes from './components/Jokes'
import createBrowserHistory from 'history/createBrowserHistory'

ReactDOM.render(<Router history={createBrowserHistory()} >
    <Switch>
        <Route  exact path='/' component={App} />
        <Route path='/Jokes' component={Jokes} />
    </Switch>
</Router>,document.getElementById('root'));
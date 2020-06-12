import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Router,Switch,Route} from 'react-router-dom'
import './index.css'
import Jokes from './components/Jokes'
import MusicMaster from './Projects/music-master'
import createBrowserHistory from 'history/createBrowserHistory'

ReactDOM.render(<Router history={createBrowserHistory()} >
    <Switch>
        <Route  exact path='/' component={App} />
        <Route path='/Jokes' component={Jokes} />
        <Route path='/music-master' component={MusicMaster} />
    </Switch>
</Router>,document.getElementById('root'));
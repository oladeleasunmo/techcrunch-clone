import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import preloader from './components/preloader'
import Header from './components/header'
import Home from './screens/home'
import Post from "./screens/post" 

// const HomePage = Loadable({
//   loader: () => import('./screens/home'),
//   loading: preloader,
// })

function App() {
    return (
        <Router>
            <Switch>
                <Route path= "/post/:index" component= {Post} />
                <Route path='/' exact component={Home} />
            </Switch>
        </Router>
    )
}

export default App;

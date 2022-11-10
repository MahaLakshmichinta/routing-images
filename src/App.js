import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => (
  <div className="app-container">
    <div className="routing-container">
      <Header />
      <div className="middle-part">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App

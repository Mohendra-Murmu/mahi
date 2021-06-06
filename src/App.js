import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './pages/about';
import Home from './pages/home';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Header from './components/header';
import NotFound from './pages/not-found';

export default function App() {
  return (<>
    <Header />
    
    <Switch>
        <Route path='/' exact>
        <Home />  
        </Route>        
        <Route path='/about' exact>
        <About />  
        </Route>        
        <Route path='/contact' exact>
        <Contact />  
        </Route>        
        <Route path='/projects' exact>
        <Projects />  
        </Route>      
        <Route component={NotFound} />  
    </Switch>       
    </>
  );
}

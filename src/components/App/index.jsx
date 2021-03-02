import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Wrapper, GlobalStyle, Navigation,NavigationLink} from "./styles";
import Home from '../Home';
import Statistics from '../Statistics';
import About from '../About';


const App = () =>{
return (
     <Router>
          <Wrapper> 
               <GlobalStyle/>
               <nav>
                    <Navigation>
                         <li>
                              <NavigationLink to="/">Home</NavigationLink>
                         </li>
                         <li>
                              <NavigationLink to="/statistics">Statistics</NavigationLink>
                         </li>
                         <li>
                              <NavigationLink to="/about">How to use?</NavigationLink>
                         </li>
                    </Navigation>
               </nav>

               <Switch>
                    <Route path="/statistics">
                         <Statistics />
                    </Route>
                    <Route path="/about">
                         <About />
                    </Route>
                    <Route path="/">
                         <Home />
                    </Route>
               </Switch>
          </Wrapper>
     </Router>
     );
}

    
export default App;
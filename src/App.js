// import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import Welcome from './components/pages/Welcome';
import StepCounter from './components/pages/Stepcounter';
import Activity from './components/pages/Activity';
import YourPoints from './components/pages/YourPoints';
import Greenpeace from './components/pages/Greenpeace';
import ThankU from './components/pages/ThankU';
import Nsf from './components/pages/Nsf';
import Wwf from './components/pages/Wwf';

function App() {
   return (
      <>
         <GlobalStyle />
         <Router>
            <Switch>
               <Route path='/' exact component={Welcome} />
               <Route path='/home' exact component={StepCounter} />
               <Route path='/activity' exact component={Activity} />
               <Route path='/points' exact component={YourPoints} />
               <Route path='/greenpeace' exact component={Greenpeace} />
               <Route path='/naturskyddsforeningen' exact component={Nsf} />
               <Route path='/wwf' exact component={Wwf} />
               <Route path='/thanku' exact component={ThankU} />
            </Switch>
            <Navbar />
         </Router>
      </>
   );
}

export default App;

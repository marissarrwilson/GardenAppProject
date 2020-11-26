import './App.css';
import Header from './components/Header'
import Home from './views/Home'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Cardswrap from "./components/Cardswrap";

// import Home from "./views/Home";
// import Login from "./views/login";
// import Pantry from "./view/pantry";
import Post from "./views/Post";
import Signup from "./views/Signup";
import Login from "./views/login";

function App() {
  return (
    <Router>
     <div className="container">
       <div className="App">
        <Header />
          {/* <Route path="/" exact component={Home} /> */}
          {/* <Route path="/Pantry" component={Pantry} /> */}
          <Route path="/post" component={Post} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Login" component={Login} />
          <Route path="/feed" component={Cardswrap}/>
          <Route exact path="/" component={Home} />

        <Footer />
       </div>
      </div>
    </Router>
  );
}

export default App;

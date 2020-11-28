import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './views/Home'
import Feed from "./views/Feed";
import Post from "./views/Post";
import Signup from "./views/Signup";
import Login from "./views/login";

function App() {
  return (
    <Router>

       <div className="App">
        <Header />
        <div className="container-fluid">
          {/* <Route path="/Pantry" component={Pantry} /> */}
          <Route path="/post" component={Post} />
          <Route path="/Login" component={Login} />
          <Route path="/feed" component={Feed}/>
          <Route exact path="/" component={Home} />
          </div>
        <Footer />
       </div>

    </Router>

  );
}

export default App;

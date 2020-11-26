import './App.css';
import Header from './components/Header'
import Home from './views/Home'
import Footer from './components/Footer'
import Post from './views/Post'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Post />
      <Footer />
    </div>
  );
}

export default App;

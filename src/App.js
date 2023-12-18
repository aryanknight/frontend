import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Searchbar from './component/Searchbar/Searchbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Searchbar/>
    </div>
  );
}

export default App;

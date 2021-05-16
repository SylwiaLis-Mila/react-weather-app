import logo from './logo.svg';
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      
        <Weather defaultCity="Stuttgart"/>
            <footer> This project was coded by Sylwia Lis-Mila and is{""} 
               <a href="https://github.com/SylwiaLis-Mila/react-weather-app" target="_blank"> open-sourced on GitHub </a>
               and <a href="https://determined-saha-57968b.netlify.app/">hosted on Netlify</a>
            </footer>
      </div>
    </div>
  );
}

export default App;

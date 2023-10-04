import './App.css'
import NavBar from "./components/NavBar.jsx";
import NowPlaying from "./components/NowPlaying/NowPlaying.jsx";
import RightBar from "./components/RightBar.jsx";
import MainScreen from "./components/MainScreen.jsx";

function App() {
    return (
        <div className="flex relative w-fit">
            <NavBar/>
            <NowPlaying/>
            <MainScreen/>
            <RightBar/>
        </div>
    );
}

export default App

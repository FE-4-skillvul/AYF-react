import "./App.css";
import Profile from "./pages/Profile";
import NavbarComponent from "./components/NavbarComponent";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Profile />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

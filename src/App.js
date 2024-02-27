import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Popular from "./components/popular/Popular";
import New from "./components/new/New";
import Top from "./components/top/Top";
import MovieDetail from "./components/movie/MovieDetail";
import ActersDetail from "./components/actors/ActersDetail";
import Home from "./components/home/Home";
import Hero from "./components/home/Hero";
import Search from "./components/search/Search";
import Favorite from "./components/favorite/Favorite";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hero" element={<Hero />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/new" element={<New />} />
        <Route path="/top" element={<Top />} />
        <Route path="/MovieDetail/:id" element={<MovieDetail />} />
        <Route path="/ActersDetail/:id" element={<ActersDetail />} />
        <Route path="/search/:movieName" element={<Search />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

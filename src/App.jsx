import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/Header";

function App() {
  const [bookmarked, setBookMarked] = useState([]);
  return (
    <div className="p-10">
   <Header />
   <div className="md:flex">
   <Blogs setBookMarked={setBookMarked} bookmarked={bookmarked} />
   <Bookmarks bookmarked={bookmarked} />
   </div>
    </div>
  );
}

export default App;

import React from "react";
import NewsList from "./components/NewsList";
import SearchBar from "./components/SearchBar";
import { NewsStore } from "./stores/NewsStore";
import { UserStore } from "./stores/UserStore";
import "./styles/App.css";

function App() {
  const userStore = new UserStore();
  const newsStore = new NewsStore();

  return (
    <div className="app">
      <SearchBar newsStore={newsStore} userStore={userStore} />
      <NewsList newsStore={newsStore} userStore={userStore} />
    </div>
  );
}

export default App;

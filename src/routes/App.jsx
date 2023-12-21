import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header";
import Footer from "../components/Footer";
import Sidebar from "../components/sidebar";
import CreatePost from "../components/Createpost";
import PostList from "../components/PostList";
import { useState } from "react";
import PostListProvider from "../stores/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <Sidebar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          ></Sidebar>
          <div className="content">
            <Header></Header>
            <Outlet></Outlet>
            {/* {selectedTab == "Home" ? (
              <PostList></PostList>
            ) : (
              <CreatePost selectedTab={selectedTab} setSelectedTab={setSelectedTab}></CreatePost>
            )} */}

            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Post } from "./pages/Post";
import { Posts } from "./pages/Posts";
import { User } from "./pages/User";
import { Users } from "./pages/Users";
import { ROUTES } from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.USERS} element={<Users />} />
        <Route path={ROUTES.USER} element={<User />} />
        <Route path={ROUTES.POST} element={<Post />} />
        <Route path={ROUTES.POSTS} element={<Posts />} />
      </Routes>
    </Router>
  )
}

export default App;

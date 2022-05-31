import React from "react";
import {
    Route,
    BrowserRouter as Router,
    Routes
} from "react-router-dom";
import { Post } from "./pages/Post";
import { User } from "./pages/User";
import { Users } from "./pages/Users";
import { ROUTES } from "./routes";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={ ROUTES.USERS } element={ <Users /> } />
                <Route path={ ROUTES.USER } element={ <User /> } />
                <Route path={ ROUTES.POST } element={ <Post /> } />
            </Routes>
        </Router>
    );
}

export default App;

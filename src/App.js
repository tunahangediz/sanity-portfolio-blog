import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import OnePost from "./components/OnePost";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import Projects from "./components/Projects";

function App() {
    return (
        <div className="App ">
            <div className="container">
                <Router>
                    <Navbar />

                    <Switch>
                        <Route exact path="/">
                            <MainSection />
                        </Route>
                        <Route exact path="/blogs">
                            <AllPosts />
                        </Route>
                        <Route exact path="/projects">
                            <Projects />
                        </Route>
                        <Route exact path="/:slug">
                            <OnePost />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

// COMPONENTS IMPORTS
import Home from "./components/Home";
import { Route, Switch, Link } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import UserRecipes from "./components/UserRecipes";
import AddRecipe from "./components/AddRecipe";
import RecipesList from "./components/RecipesList";
import UpdateRecipe from "./components/UpdateRecipe";

// TRANSITION IMPORTS
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      <div className="navigation">
        <div className="logo">
          <h1>Secret Family Recipes</h1>
        </div>
        <div className="nav-link-container">
          {/* <Link to="/login">Login</Link> */}
          <a
            className="nav-link"
            href="https://secretfamilyrecipeszs.netlify.com/about.html"
            target="_blank"
          >
            About Us
          </a>
          <a
            className="nav-link"
            href="https://secretfamilyrecipesrd.netlify.com/contact.html"
            target="_blank"
          >
            Contact
          </a>
          {/* <Link to="/">Sign Up</Link> */}
        </div>
      </div>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={500} classNames="fade">
              <Switch location={location}>
                {/* ROUTES */}
                <Route exact path="/" component={SignUp} />
                <Route exact path="/login" component={Login} />

                {/* PRIVATE ROUTES */}
                <PrivateRoute exact path="/home" component={Home} />
                <PrivateRoute
                  exact
                  path="/user-recipes"
                  component={UserRecipes}
                />
                <PrivateRoute
                  exact
                  path="/all-recipes"
                  component={RecipesList}
                />
                <PrivateRoute exact path="/add-recipe" component={AddRecipe} />
                <PrivateRoute
                  exact
                  path="/update-recipe/:id"
                  component={UpdateRecipe}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      ></Route>
    </div>
    // </BrowserRouter>
  );
}

export default App;

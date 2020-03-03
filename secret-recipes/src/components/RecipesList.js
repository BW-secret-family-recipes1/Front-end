import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import getRecipes from "../action/getRecipes";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialState = {
  id: Date.now(),
  title: "",
  creator: "",
  ingredients: "",
  directions: "",
  category: ""
};

function RecipesList(props) {
  console.log("Look at me, props", props);

  const [recipeList, setRecipeList] = useState(initialState);

  //   useEffect(() => {
  //     axiosWithAuth()
  //       .get("/recipes")
  //       .then(res => {
  //         console.log(res.data);
  //         setRecipeList(res.data);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }, []);

  //   useEffect(() => {
  //     getRecipes();
  //   }, []);

  //   const getRecipesList = () => {
  //     getRecipes();
  //   };

  return (
    <div>
      <Link onClick={props.getRecipes} to="/all-recipes">
        All Recipes
      </Link>
      <Link to="/user-recipes">Recipes by Author</Link>
      <Link to="/add-recipe">Add Recipe</Link>
      {props.recipesList.map(recipe => {
        console.log("Recipe here", recipe);
        return <div key={recipe.id}>{recipe.title}</div>;
      })}
    </div>
  );
}

const mapStateToProps = ({ getRecipesReducer }) => {
  return {
    recipesList: getRecipesReducer.recipes
  };
};

// export default RecipesList;

export default connect(mapStateToProps, { getRecipes })(RecipesList);

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Grid } from '@material-ui/core';
import Content from "./components/Content";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  return (
    <>
        <Header isAuthenticated={isAuthenticated} />
        <Grid container spacing={3}>
          <Grid item>
            <p>Welcome to the app.</p>

            {isAuthenticated ? (
              <Content />
            ) : (
              "Please log in."
            )}
          </Grid>
        </Grid>

        <form action="../post" method="post"  >
          <button type="submit">Connected?</button>
        </form>

      <form action="../insert_item" method="post">
      Enter item in the wishlist 
      <br/>
      <input type ="text" id ="hotel_name" placeholder ="Enter hotel name: " />
      <br/>
      <input type ="text" id ="food_item" placeholder ="Enter item name: " />
      <br/> 
      <input type ="text" id ="location" placeholder ="Enter hotel location: " />
      <br/>
      <input type = "submit" placeholder ="Add to wishlist ! "/>
    </form>
    <br/>
    <br/>

    <form action="../getwishlist/:id" method="get">
    <input type ="text" id ="id" placeholder ="Enter id number:" />
      <button>
        Click to see wishlist ! 
      </button>
    </form>
            

    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Grid } from '@material-ui/core';
import Content from "./components/Content";
import { useAuth0 } from "@auth0/auth0-react";

import PostList from './components/PostList';

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



    <form action="../insert_item" method="post" id ="form-submit">
      Enter item in the wishlist 
      <br/>
      <input type ="text" name ="hotel_name" placeholder ="Enter hotel name: " />
      <br/>
      <input type ="text" name ="food_item" placeholder ="Enter item name: " />
      <br/> 
      <input type = "submit" placeholder ="Add to wishlist ! "/>
     </form>
    <br/>
    <br/>

    <form action="../getwishlist" method="get">
    <input type ="text" id ="id" placeholder ="Enter id number:" />
      <button>
        Click to see wishlist ! 
      </button>
    </form>
    <br/>
    <br/>       

    <form action="../remove_item" method="post">
        To remove item from the database ! Simply type your accomplishment
      <br/>
      <input type ="text" id ="h_visited" placeholder ="Enter hotel visited: " />

      <input type = "submit" placeholder ="Remove from wishlist ! "/>
    </form>
    <br/>
    <br/>
    
    <PostList />

    </>
  );
}

export default App;

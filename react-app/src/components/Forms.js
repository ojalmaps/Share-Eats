import React from 'react';

function Forms() {
    return (
        <>
            
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

      <label for="choice">Choose option to add:</label>
      <select name="choice" form="form-submit">
        <option value="wish">Wishlist</option>
        <option value="rec">recommend</option>
       </select>


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
     
        </>
    );
}

export default Forms;


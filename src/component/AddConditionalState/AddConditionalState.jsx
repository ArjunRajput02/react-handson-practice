import React from "react";
import './AddConditionalState.css'

export default function AddConditionalState()
{
    const [isDeleted,setIsDeleted] = React.useState(false);
        function deleteHandler(){
            setIsDeleted(true);
        }
        function proceedHandler(){
            setIsDeleted(false);
        }
        return (
          <div>
          {
          isDeleted ? 
            <div data-testid="alert" id="alert">
              <h2>Are you sure?</h2>
              <p>These changes can't be reverted!</p>
              <button onClick = {proceedHandler}>Proceed</button>
            </div>:null
            }
            <button onClick = {deleteHandler}>Delete</button>
          </div>    
        );
}

import { Container } from "@mui/material";
// import Hp,{item} from './hp.js'

function cart(){
    

    return(
      <div>
       {/* <h1> ADD TO CART</h1>
        <div>
        {cart.length === 0 && <p>no item in the cart</p>}
        {cart.length > 0 && (
          <ul>
            <li key ={ListItem.id}>
                <span>{ListItem.name}- 
                quantity :{item.quantity}</span>
                <div onClick={() => updateCart(item.id,1)}>+</div>
                <div onClick={() => updateCart(item.id,-1)}>-</div>
                <div onClick={() => removeCart(item.id)}>Remove</div>
            </li>
          </ul>
       )}
     </div> */}
        
       </div>
    )
}

export default cart;
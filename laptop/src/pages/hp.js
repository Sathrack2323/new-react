import React, { useState } from "react";


 function Hp(){

//   const [cart,setcart] = useState([])

//  const item =[
//     {id:1, name:'latitude 4543', price:23.332, decription:"hwekjewex kejxjwe"},
//     {id:2, name:'tude 8743', price:88.232, decription:"hwekjew exwdbkwhd kejxjwe"},
//     {id:3, name:'razon 9043', price:56.332, decription:"hwekjewex wdwhdkjh"}
//   ]

//    const addToCart = (item) =>{
//       const exitingItem = cart.find((cartItem) =>
//           cartItem.id === item.id )

//           if(exitingItem){
//           const exitingItemUpdate =cart.map((cartItem) => cartItem.id === item.id ? {...cartItem,
//             quantity : cartItem.quantity + 1} : cartItem)
//             setcart(exitingItemUpdate)
//           }
//           else{
//             setcart([...cart,{...item,quantity : 1}]);
//           }
//     }
//     const removeFromCart = () =>{
//        setcart (cart.filter((item) => item.id !== id))
//     }

//      const updateCart = (id,amount) =>{
//           const updateCart = cart.map(item => {
//             if(item.id === id){
//               return {...item,quantity:item. quantity + amount}
//             }
//             return item;
//           })

//           const filterCart = updateCart.filter(item => {
//             item.quantity > 0
//           })
//           setcart(filterCart);
    

    return(
      <>
      hello
      </>
    //    <div>
    //     <h1>ADD TO CART</h1>
    //     <div>
    //       {item.map((item)=>(
    //         <>
       
    //     <h2>{name}</h2>
    //     <h6>{decription}</h6>
    //     <h3>{price}</h3>
    //     <button onClick={() => addToCart(item)}>Addto cart</button>
    //     </>
    //     ))}
    //     </div>
    //     <div>
    //    <h1> ADD TO CART</h1>
    //     <div>
    //     {cart.length === 0 && <p>no item in the cart</p>}
    //     {cart.length > 0 && (
    //       <ul>
    //         <li key ={ListItem.id}>
    //             <span>{ListItem.name}- 
    //             quantity :{item.quantity}</span>
    //             <div onClick={() => updateCart(item.id,1)}>+</div>
    //             <div onClick={() => updateCart(item.id,-1)}>-</div>
    //             <div onClick={() => removeFromCart(item.id)}>Remove</div>
    //         </li>
    //       </ul>
    //    )}
    //  </div>
        
    //    </div>
    //    </div>
       )

       
}

export default Hp;
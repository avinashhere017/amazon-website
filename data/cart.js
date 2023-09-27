let cart=JSON.parse(localStorage.getItem('cart'));

if(!cart){
    cart=[
        {
            productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity:2
        },
        {
            productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity:1
        }
    ];
}
//===>remove the pre made array , now using local storage


function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

//Add cart function
function addToCart(productId){
    let matchingItem;//to figure out the matching item
    cart.forEach((item)=>{
      if(productId===item.productId){
        matchingItem=item;
      }
    });

    if(matchingItem){
      matchingItem.quantity+=1; // item is already present in the cart, just increase the quantity by 1
    }
    else{
      cart.push({
        productId: productId,
        quantity: 1
      });
    }
    saveToStorage();
}



function removeFromCart(productId){
    const newCart=[];
    cart.forEach((cartItem)=>{
        if(cartItem.productId != productId){
            newCart.push(cartItem);
        }
    });
    cart=newCart;
    saveToStorage();
}
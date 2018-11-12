
const userInitialState = {
    cart : [],
}

const cartReducer = (state = userInitialState, action)=>{

    switch (action.type) {

        case 'decQTY' :
        {
            let {cart} = state;
            const { id, name, price } = action.payload;
            let totalPrice = 0;
            let availableQty = action.payload.quantity;
        
            let obj = cart.filter(item => (id===item.id));
            let quantity = 1;
            totalPrice = price * quantity;
            //console.log('totalPrice before inc--->>',totalPrice);

            if(obj.length) {
                quantity = obj[0].quantity + 1;
                availableQty = availableQty--;
                totalPrice = price * quantity;
                //console.log('totalPrice--->>',totalPrice);

                cart = cart.map((item)=> {
                    if(item.id === id){
                        return {id, name, quantity, price, availableQty, totalPrice}
                    } else{
                        return item;
                    }
                });
                console.log(">>>>>>>> cart >>>>..", cart)
            } else {
                
                //console.log('obj in decQty after adding available Qty- --->',obj);
                cart = cart.concat([{id, name, quantity, price, availableQty, totalPrice}]);
            }

            return {
                ...state,
                cart
            };
        }

        case 'INC_CART_QTY' :
        {
            let {cart} = state;
            const id = action.payload.id;
            const price = action.payload.price;

            let obj = cart.filter(item => (id===item.id));
            console.log('obj in cart inc--->',obj);

            if(obj.length) {
                let quantity = obj[0].quantity + 1;
                let availableQty = obj[0].availableQty - 1;
                let totalPrice = price * quantity;
                console.log('totalPrice on inc qty--->>',totalPrice);
                cart = cart.map((item)=> {
                    if(item.id === id){
                        return {...item ,quantity, availableQty, totalPrice}
                    } else{
                        return item;
                    }
                });
            }
            return {
                ...state,
                cart
            };
        }

        case 'DEC_CART_QTY' :
        {
            let {cart} = state;
            const id = action.payload.id;
            const price = action.payload.price;
            let obj = cart.filter(item => (id===item.id));

            if(obj.length) {
                let quantity = obj[0].quantity - 1;
                let totalPrice = price * quantity;
                console.log('totalPrice on dec qty--->>',totalPrice);
                let availableQty = obj[0].availableQty + 1;
                cart = cart.map((item)=> {
                    if(item.id === id){
                        return {...item, quantity, availableQty, totalPrice}
                    } else{
                        return item;
                    }
                });
            }
            return {
                ...state,
                cart
            };
        }

        case 'DELETE' :
        {
            let {cart} = state;
            const id = action.payload.id;
            const firstMatchIndex = cart.indexOf(id);
            cart.splice(firstMatchIndex,1);
            const newArr = cart.slice();
            return Object.assign({}, state, {cart: newArr})
        }

        default :
            return state;
    }
};

export default cartReducer;


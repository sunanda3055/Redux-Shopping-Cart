
const userInitialState = {
    cart : [],
}

const cartReducer = (state = userInitialState, action)=>{

    switch (action.type) {

        case 'decQTY' :
        {
            let {cart} = state;
            const id = action.payload.id;
            const name = action.payload.name;
            const price = action.payload.price;
            let availableQty = action.payload.quantity;
            let obj = cart.filter(item => (id===item.id));
            console.log('obj in decQty---->',obj);
            let quantity = 1;

            if(obj.length) {
                quantity = obj[0].quantity + 1;
                availableQty = availableQty--;

                cart = cart.map((item)=> {
                    if(item.id === id){
                        return {id,name,quantity,price, availableQty}
                    } else{
                        return item;
                    }
                });
            } else {
                cart.push({id,name,quantity,price,availableQty});
                console.log('obj in decQty after adding available Qty- --->',obj);
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
            let obj = cart.filter(item => (id===item.id));
            console.log('obj in cart inc--->',obj);

            if(obj.length) {
                let quantity = obj[0].quantity + 1;
                let availableQty = obj[0].availableQty - 1;
                cart = cart.map((item)=> {
                    if(item.id === id){
                        return {...item ,quantity, availableQty}
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
            let obj = cart.filter(item => (id===item.id));

            if(obj.length) {
                let quantity = obj[0].quantity - 1;
                let availableQty = obj[0].availableQty + 1;
                cart = cart.map((item)=> {
                    if(item.id === id){
                        return {...item ,quantity,availableQty}
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


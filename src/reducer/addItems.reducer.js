import PRODUCTS from "../constants";

const userInitialState = {
    products: PRODUCTS,
}

const userReducer = (state = userInitialState, action)=>{
    switch (action.type) {

        case 'decQTY' :
        {
            const { products } = state;
            const updatedProducts = products.map(product => {
                if (product.id === action.payload.id) {
                    return {
                        ...product,
                        quantity: --product.quantity,
                    }
                }
                return product;
            })
            return {
                ...state, products: updatedProducts,
            }
        }

        case 'INC_CART_QTY' :
        {
            let {products} = state;
            const id = action.payload.id;
            let obj = products.filter(item => (id===item.id));

            if(obj.length) {
                let quantity = obj[0].quantity - 1;
                products = products.map((item)=> {
                    if(item.id === id){
                        return {...item ,quantity}
                    } else{
                        return item;
                    }
                });
            }
            return {
                ...state,
                products
            };
        }

        case 'DEC_CART_QTY' :
        {
            let {products} = state;
            const id = action.payload.id;
            let obj = products.filter(item => (id===item.id));

            if(obj.length) {
                let quantity = obj[0].quantity + 1;
                products = products.map((item)=> {
                    if(item.id === id){
                        return {...item ,quantity}
                    } else{
                        return item;
                    }
                });
            }
            return {
                ...state,
                products
            };
        }

        case 'DELETE' :
        {
            let {products} = state;
            const id = action.payload.id;
            const availableQty = action.availableQty;

            let obj = products.filter(item => (id===item.id));

            if(obj.length) {
                let quantity = obj[0].quantity + availableQty;
                products = products.map((item)=> {
                    if(item.id === id){
                        return {...item ,quantity}
                    } else{
                        return item;
                    }
                });
            }
            return {
                ...state,
                products
            };

        }

        default :
            return state;
    }
};

export default userReducer;
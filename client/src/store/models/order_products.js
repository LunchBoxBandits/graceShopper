import {action, thunk} from "easy-peasy"
import axios from "axios"

export default cart = {

    data:[],
    selectedCart:{},
    setCarts:action((state, payload)=>{
        state.data = payload;
    }),
    addToCart :thunk(async(actions, payload)=>{
        const {data} = await axios.post("/api/order_products");
        actions.setCarts(data);
    }),
    deleteProductCart: thunk(async(actions, payload)=>{
        const {data} = await axios.delete(`/api/order_products/:order_id/:product_id`);
        actions.setCart(data);
    })





}
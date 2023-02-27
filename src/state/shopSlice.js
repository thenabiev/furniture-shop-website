import { createSlice } from "@reduxjs/toolkit";
import { data } from "../assets/data";


const initialState={
    shop: data,
    cartItems:[],
    itemsInCart:0,
    searchTerm:'',
}

export const shopSlice=createSlice({
    name: 'shop',
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            state.amount+=1;

            const cartItem=state.cartItems.find(item=>item.id===action.payload.id);

            cartItem? (cartItem.amount+=1)
                : state.cartItems.push({...action.payload, amount: 1})


            state.itemsInCart=state.cartItems.reduce((a,c)=>a+c.amount, 0)

        },
        removeFromCart:(state, action)=>{
            state.cartItems=state.cartItems.filter(x=>x.id!==action.payload)

            state.itemsInCart=state.cartItems.reduce((a,c)=>a+c.amount, 0)

        },
        increase:(state, action)=>{
            state.cartItems=state.cartItems.map(
                item=>{
                    if(item.id!==action.payload){
                        return item
                    }else{
                        return {...item, amount: item.amount+1}
                    }
                }
            )
            state.itemsInCart=state.cartItems.reduce((a,c)=>a+c.amount, 0)

        },
        decrease:(state, action)=>{
            if(action.payload.amount==1){
            state.cartItems=state.cartItems.filter(x=>x.id!==action.payload.id)
                
            }
            else{
                state.cartItems=state.cartItems.map(
                    item=>{
    
                        if(item.id!==action.payload.id){
                            return item
                        }
                        
                        else{
                            
                            return {...item, amount: item.amount-1}
                        }
                        
                    }
                )
            }
            state.itemsInCart=state.cartItems.reduce((a,c)=>a+c.amount, 0)

        },
        setSearchTerm(state, action){
            state.searchTerm=action.payload
        },
    }
})

export default shopSlice.reducer;
export const { addToCart, removeFromCart, increase, decrease, setSearchTerm}=shopSlice.actions;
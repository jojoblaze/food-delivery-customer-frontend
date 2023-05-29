import { createSlice } from '@reduxjs/toolkit'
import {
    fetchShop,
    fetchShop_fulfilled,
    fetchShops, fetchShops_fulfilled,
    // createDish, createDish_fulfilled,
    // fetchDishes, fetchDishes_fulfilled, 
    // updateDish, updateDish_fulfilled,
    // removeDish, removeDish_fulfilled
} from "./shops.actions";

export const initialState = {
    shops: []
}

export const ShopsDataSlice = createSlice({
    name: 'delivery',
    initialState,
    reducers: {
        addDishToOrder: (state, action) => {
            const { merchantId, dishId, quantity } = action.payload
            // const shop = state.shops.find(s => s.id === merchantId)
            // const activeOrder = shop.activeOrders.find(ao => ao.dishId === dishId)
            // let newActiveOrder = null;
            // if (activeOrder === undefined)
            //     newActiveOrder = { dishId: dishId, quantity: quantity }
            // else
            //     newActiveOrder = { ...activeOrder, quantity: quantity }

            // shop.activeOrders = [...shop.activeOrders, newActiveOrder]

            const updatedShopWithOrders = state.shops.map(shop => {
                if (shop.id === merchantId) {
                    const existingActiveOrder = shop?.activeOrders?.find(ao => ao.dishId === dishId)
                    if (existingActiveOrder != null) {
                        const activeOrders = shop?.activeOrders?.map(ao => {
                            if (ao.dishId === dishId) {
                                return { ...ao, quantity: ao.quantity + quantity || 0 }
                            } else {
                                return ao
                            }
                        })
                        return { ...shop, activeOrders: [...activeOrders] }
                    } else {
                        return { ...shop, activeOrders: [...shop?.activeOrders || [], { dishId: dishId, quantity: quantity }] }
                    }
                } else
                    return shop
            })
            state.shops = [...updatedShopWithOrders]
        },
        removeDishFromOrder: (state, action) => {
            const { merchantId, dishId } = action.payload

            const updatedShopWithOrders = state.shops.map(shop => {
                if (shop.id === merchantId) {
                    const existingActiveOrder = shop.activeOrders.find(
                        (ao) => ao.dishId === dishId
                    );
                    if (existingActiveOrder.quantity === 1) {
                        // remove from active orders
                        const updatedOrders = shop.activeOrders.filter(
                            (ao) => ao.dishId !== dishId
                        );
                        return { ...shop, activeOrders: [...updatedOrders] };
                    } else {
                        // update quantity by -1
                        const updatedOrders = shop.activeOrders.map((ao) => {
                            if (ao.dishId !== dishId)
                                return { ...ao, quantity: ao.quantity - 1 };
                            else return ao;
                        });
                        return { ...shop, activeOrders: [...updatedOrders] };
                    }
                }
                else
                    return shop
            })
            state.shops = [...updatedShopWithOrders]
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchShops.fulfilled, fetchShops_fulfilled)
            .addCase(fetchShop.fulfilled, fetchShop_fulfilled)
        // .addCase(fetchDishes.fulfilled, fetchDishes_fulfilled)
        // .addCase(createDish.fulfilled, createDish_fulfilled) !== []
        // .addCase(updateDish.fulfilled, updateDish_fulfilled)
        // .addCase(removeDish.fulfilled, removeDish_fulfilled)
    }
})

// Action creators are generated for each case reducer function
export const { addDishToOrder, removeDishFromOrder } = ShopsDataSlice.actions

export default ShopsDataSlice.reducer

// SELECTORS
export const selectAllShops = state => state.delivery.shops
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getDish, getDishes, postOrder, putDish, deleteDish, getShops, getShop } from "../../services/api/menu";


const loadShops = async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await getShops();
        console.log("shops:", response);
        return response;
    } catch (error) {
        return rejectWithValue(error.message);
    }
}
export const fetchShops = createAsyncThunk('menu/shops/getall', loadShops)

export const fetchShops_fulfilled = (state, action) => {
    console.log('fetchDishes action:', action, 'fullfilled payload:', action.payload);

    const shops = action.payload

    // state.shops = [...action.payload]
    state.shops = shops.map(s => {
        const x = state.shops.find(ss => ss.id === s.id)
        if (x !== undefined)
            return { ...s, activeOrders: x.activeOrders }
        else
            return s
    })
}

const loadShop = async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await getShop(_);
        console.log("shop:", response);
        return response;
    } catch (error) {
        return rejectWithValue(error.message);
    }
}
export const fetchShop = createAsyncThunk('menu/shop/get', loadShop)

export const fetchShop_fulfilled = (state, action) => {
    console.log('fetchShop action:', action, 'fullfilled payload:', action.payload);
    let newShop = null;
    const updatedShops = state.shops?.map(shop => {
        if (shop.id === action.payload.id) {
            // return action.payload
            newShop = { ...action.payload, activeOrders: [...shop.activeOrders] }
            return newShop
        } else {
            return shop
        }
    })
    state.shops = [...updatedShops]
}


export const createOrder = createAsyncThunk(
    'menu/orders/new',
    // The payload creator receives the partial `{title, content, user}` object
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await postOrder(_)
            // The response includes the complete post object, including unique ID
            return response
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
export const createOrder_fulfilled = (state, action) => {
    if (action.payload.success === true)
        state.activeOrders = [...state.activeOrders, action.payload.data]
}

/*
export const updateDish = createAsyncThunk(
    'menu/dishes/update',
    // The payload creator receives the partial `{title, content, user}` object
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await putDish(_.dish)
            // The response includes the complete post object, including unique ID
            return response.data
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
export const updateDish_fulfilled = (state, action) => {
    if (action.payload === true) {
        // a();
        state.dishes = [...state.dishes, action.meta.arg]
    }
}

export const removeDish = createAsyncThunk(
    'menu/dishes/delete',
    // The payload creator receives the partial `{title, content, user}` object
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await deleteDish(_)
            // The response includes the complete post object, including unique ID
            return response
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
export const removeDish_fulfilled = (state, action) => {
    if (action.payload === true) {
        const newDishes = state.dishes.filter(d => d.id !== action.meta.arg)
        state.dishes = [...newDishes]
    }
}
*/
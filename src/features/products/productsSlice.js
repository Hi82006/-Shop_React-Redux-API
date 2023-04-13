import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { shuffle } from "../../utils/common";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")



export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (_, thunkAPI) => {
        try{
           const res = await axios(`${BASE_URL}/products`);
           return res.data
        } catch(err){
            console.log(err);
            return thunkAPI.rejectWithValue(err)
        }
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        filtered: [],
        related: [],
        isLoading: false,
    },
    reducers: {
        filterByPrice: (state, { payload }) => {
            state.filtered = state.list.filter(({ price }) => price < payload);
        },
        getRaletedProducts: (state, { payload }) => {
            const list = state.list.filter(({ category: { id } }) => id === payload);
            state.related = shuffle(list);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, { payload }) => {
            state.list = payload;
            state.isLoading = false;
        });
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false;
        });
    }
});

export const { filterByPrice, getRaletedProducts } = productsSlice.actions;
export default productsSlice.reducer;

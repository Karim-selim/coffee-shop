import { createSlice } from "@reduxjs/toolkit";
let items = [];
let inputQuantaty;

const cartSlice = createSlice({
  name: "cart",
  initialState: { items, inputQuantaty },
  reducers: {
    setQuantatiy(state, action) {
      state.inputQuantaty = action.payload;
    },

    adding(state, action) {
      const NewItem = action.payload;
      const existingItem = state.items.find(
        (item) => NewItem.title === item.title
      );
      if (!existingItem) {
        state.items.push({
          image: NewItem.image || NewItem.photoUrl,
          id: NewItem.id,
          price:
            NewItem.totalTime || NewItem.id * NewItem.ingredients.length * 7,
          title: NewItem.title,
          quantity: state.inputQuantaty,
        });
      } else {
        existingItem.quantity = existingItem.quantity + state.inputQuantaty;
      }
    },

    reducing(state, action) {
      const id = action.payload.id;
      const title = action.payload.title;
      const existingItem = state.items.find(
        (item) => item.id === id && item.title === title
      );
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },

    removing(state, action) {
      const oldItem = action.payload;
      state.items = state.items.filter((item) => item.title !== oldItem);
    },
  },
});

export default cartSlice;
export const cartActions = cartSlice.actions;

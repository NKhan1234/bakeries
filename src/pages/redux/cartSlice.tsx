import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      const itemQuantity = newItem.quantity ?? 1; // Set default quantity if undefined

      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + itemQuantity;
      } else {
        state.items.push({ ...newItem, quantity: itemQuantity });
      }

      state.totalQuantity += itemQuantity;
      state.totalPrice += newItem.price * itemQuantity;
    },

    removeItem(state, action: PayloadAction<number>) {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity || 0;
        state.totalPrice -= existingItem.price * (existingItem.quantity || 0);
        state.items = state.items.filter((item) => item.id !== itemId);
      }
    },

    increaseQuantity(state, action: PayloadAction<number>) {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + 1;
        state.totalQuantity += 1;
        state.totalPrice += existingItem.price;
      }
    },

    decreaseQuantity(state, action: PayloadAction<number>) {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem && existingItem.quantity && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;
      }
    },

    updateQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem && quantity > 0) {
        state.totalQuantity += quantity - (existingItem.quantity || 0);
        state.totalPrice +=
          (quantity - (existingItem.quantity || 0)) * existingItem.price;
        existingItem.quantity = quantity;
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  updateQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

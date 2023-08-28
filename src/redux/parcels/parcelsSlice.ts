import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { ParcelState} from "src/entities/ParcelState";

type State = {
  parcels: ParcelState[],
}

const INITIAL_STATE: State = {
  parcels: [],
}

const parcelsSlice = createSlice({
  name: 'parcels',

  initialState: INITIAL_STATE,

  reducers: {
    addParcel: {
      reducer(state, action: PayloadAction<ParcelState>) {
        state.parcels.push(action.payload);
      },
      prepare(data: ParcelState) {
        return {
          payload: {
            ...data,
            _id: nanoid(),
          },
        };
      },
    },
    removeParcel(state, action) {
      const index = state.parcels.findIndex(parcel => parcel._id === action.payload);
      state.parcels.splice(index, 1);
    },
    updateParcel(state, action) {
      const index = state.parcels.findIndex(parcel => parcel._id === action.payload._id);
      state.parcels.splice(index, 1, action.payload);
    }
  }
})

const parcelsPersistConfig = {
  key: 'parcels',
  storage,
  whitelist: ['parcels'],
};

export const {addParcel, removeParcel, updateParcel } = parcelsSlice.actions;
export const parcelsReducer = persistReducer(parcelsPersistConfig, parcelsSlice.reducer);
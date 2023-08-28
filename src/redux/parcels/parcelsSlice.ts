import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { getParcels, createParcel, editParcel, deleteParcel } from "./parcelsOperations";
import { ParcelState} from "src/entities/ParcelState";

type State = {
  parcels: ParcelState[],
  isLoading: boolean,
}

const INITIAL_STATE: State = {
  parcels: [],
  isLoading: false,
}

const parcelsSlice = createSlice({
  name: 'parcels',

  initialState: INITIAL_STATE,

  reducers: {
    addParcel: {
      reducer(state, action: PayloadAction<ParcelState>) {
        state.parcels.unshift(action.payload);
      },
      prepare(data: Omit<ParcelState, '_id'>) {
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
  },
  extraReducers: builder => builder
    .addCase(getParcels.fulfilled, (state, action: PayloadAction<ParcelState[]>) => {
      state.parcels = action.payload;
      state.isLoading = false;
    })
    .addCase(createParcel.fulfilled, (state, action: PayloadAction<ParcelState>) => {
      state.parcels = [action.payload, ...state.parcels];
      state.isLoading = false;
    })
    .addCase(editParcel.fulfilled, (state, action: PayloadAction<ParcelState>) => {
      const index = state.parcels.findIndex(parcel => parcel._id === action.payload._id);
      state.parcels.splice(index, 1, action.payload);
      state.isLoading = false;
    })
    .addCase(deleteParcel.fulfilled, (state, action: PayloadAction<ParcelState>) => {
      state.parcels = state.parcels.filter(parcel => parcel._id === action.payload._id);
      state.isLoading = false;
    })
        .addMatcher(
        action =>
          action.type.startsWith('/parcels') &&
          action.type.endsWith.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      )
    .addMatcher(
      action =>
        action.type.startsWith('/parcels') && action.type.endsWith('/rejected'),
      state => {
        state.isLoading = false;
      }
    )
})

const parcelsPersistConfig = {
  key: 'parcels',
  storage,
  whitelist: ['parcels'],
};

export const {addParcel, removeParcel, updateParcel } = parcelsSlice.actions;
export const parcelsReducer = persistReducer(parcelsPersistConfig, parcelsSlice.reducer);
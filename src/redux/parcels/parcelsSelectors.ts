import { RootState } from "../store";

export const selectParcels = (state: RootState) => state.parcels.parcels;
export const selectIsLoading = (state: RootState) => state.parcels.isLoading;

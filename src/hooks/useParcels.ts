import { useAppSelector } from './useAppSelector';

import {
  selectParcels,
  selectIsLoading,
} from 'src/redux/parcels/parcelsSelectors';

export const useParcels = () => {
  const isLoading = useAppSelector(selectIsLoading);
  const parcels = useAppSelector(selectParcels);

  return {
    isLoading,
    parcels,
  };
};
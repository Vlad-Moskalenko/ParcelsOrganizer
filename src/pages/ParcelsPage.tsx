import { useAppSelector } from 'src/hooks/useAppSelector';
import { ParcelsList } from 'src/components';
import { selectParcels } from 'src/redux/parcels/parcelsSelectors';

function ParcelsPage() {
  const parcelsList = useAppSelector(selectParcels);

  return parcelsList.length > 0 && <ParcelsList list={parcelsList} />;
}

export default ParcelsPage;

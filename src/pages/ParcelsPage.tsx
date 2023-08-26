import { useAppSelector } from 'src/hooks/useAppSelector';
import { ParcelsList } from 'src/components';
import { selectParcels } from 'src/redux/parcels/parcelsSelectors';

function ParcelsPage() {
  const parcels = useAppSelector(selectParcels);

  return parcels.length > 0 ? (
    <>
      <ParcelsList list={parcels} />
    </>
  ) : (
    <p>No parcels</p>
  );
}

export default ParcelsPage;

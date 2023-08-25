import { ParcelsList } from 'src/components';
import { useParcels } from 'src/hooks/useParcels';

function ParcelsPage() {
  const { data } = useParcels();

  return data && <ParcelsList list={data} />;
}

export default ParcelsPage;

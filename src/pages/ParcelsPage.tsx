import { ParcelsList } from 'src/components';
import { useEffect, useState } from 'react';
import { getParcelsList } from 'src/services/parcelsApi';

function ParcelsPage() {
  const [parcels, setParcels] = useState();

  useEffect(() => {
    getParcelsList()
      .then(resp => setParcels(resp))
      .catch(err => console.log(err));
  }, []);

  return parcels && <ParcelsList list={parcels} />;
}

export default ParcelsPage;

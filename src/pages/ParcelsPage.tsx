import { ParcelsList } from 'src/components';
import { useEffect, useState } from 'react';
import { getParcelsList } from 'src/services/parcelsApi';
import { useAuth } from 'src/hooks/useAuth';

function ParcelsPage() {
  const [parcels, setParcels] = useState();
  const { isRefreshing, isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isRefreshing && isLoggedIn)
      getParcelsList()
        .then(resp => setParcels(resp))
        .catch(err => console.log(err));
  }, [isRefreshing, isLoggedIn]);

  return parcels && <ParcelsList list={parcels} />;
}

export default ParcelsPage;

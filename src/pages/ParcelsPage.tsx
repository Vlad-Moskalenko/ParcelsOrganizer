import { useAppSelector } from 'src/hooks/useAppSelector';
import { Table } from 'src/modules';
import { Spinner } from 'src/modules/UI/Spinner/Spinner';
import { selectIsLoading } from 'src/redux/parcels/parcelsSelectors';

function ParcelsPage() {
  const isLoading = useAppSelector(selectIsLoading);

  return (
    <>
      <Spinner isVisible={isLoading} />
      <Table />
    </>
  );
}

export default ParcelsPage;

import { Outlet } from 'react-router-dom';

import { AsideBar } from 'src/components';

function CreateParcelPage() {
  return (
    <>
      <AsideBar />
      <Outlet />
    </>
  );
}

export default CreateParcelPage;

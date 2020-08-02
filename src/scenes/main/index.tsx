import React from "react";

import MainLayout from "../../layouts/main";
import Shifts from "../../components/shifts";

import useUser from "../../hooks/useUser";

function SearchScene() {
  useUser();

  return (
    <MainLayout>
      <Shifts />
    </MainLayout>
  );
}

export default SearchScene;

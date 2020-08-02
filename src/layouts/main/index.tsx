import React, { ReactChild } from "react";

interface IProps {
  children: ReactChild;
}

function MainLayout({ children }: IProps) {
  return (
    <>
      <header>
        <h1>Shifts</h1>
      </header>
      <div>
        <main>{children}</main>
      </div>
      <footer> </footer>
    </>
  );
}

export default MainLayout;

import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SimpleFooter from "../components/SimpleFooter";

export default function RootLayouts() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <SimpleFooter />
    </>
  );
}

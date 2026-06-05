import { Outlet } from "react-router-dom";
import ScrollToTop from "./lib/scroll"
export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}
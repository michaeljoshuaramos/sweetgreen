import { Outlet } from "react-router-dom";
import { Footer, NavigationBar, NewsletterSection } from "../components";

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default Layout;

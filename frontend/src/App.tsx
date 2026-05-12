import "./App.css";
import { Masthead } from "./components/Masthead";
import { MainContent } from "./components/MainContent";
import { Navigation } from "./components/Navigation";
import { Sidebar } from "./components/Sidebar";
import { SiteFooter } from "./components/SiteFooter";
import {
  companyContent,
  footerNavigation,
  mainNavigation,
  pageContent,
  sidebarContent,
} from "./data/siteContent";

function App() {
  return (
    <div className="page">
      <Masthead company={companyContent} />
      <Navigation
        ariaLabel="Primary"
        className="main-nav"
        items={mainNavigation}
      />

      <div className="layout">
        <Sidebar content={sidebarContent} />
        <MainContent content={pageContent} />
      </div>

      <SiteFooter links={footerNavigation} />
    </div>
  );
}

export default App;

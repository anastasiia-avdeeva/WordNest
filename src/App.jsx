import { MainBlock } from "./components/Layout/MainBlock/MainBlock";
import { SiteHeader } from "./components/Layout/SiteHeader/SiteHeader";
import { SiteFooter } from "./components/Layout/SiteFooter/SiteFooter";

function App() {
  return (
    <>
      <SiteHeader />
      <MainBlock />
      <SiteFooter />
    </>
  );
}

export default App;

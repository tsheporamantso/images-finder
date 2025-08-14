import ThemeToggle from "./components/ThemeToggle";
import SearchForm from "./components/SearchForm";
import Gallery from "./components/Gallery";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <main>
      <ToastContainer position="bottom-left" />
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
}

export default App;

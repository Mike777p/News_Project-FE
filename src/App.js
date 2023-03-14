import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home, ArticlePage, ErrorPage } from "./Pages/";
import { Header } from "./Components/";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:article_id" element={<ArticlePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

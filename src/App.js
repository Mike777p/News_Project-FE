  import { BrowserRouter, Routes, Route} from "react-router-dom";
  import { Home, ArticlePage, ErrorPage } from "./Pages/";
  import { Header } from "./Components/";

  function App() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/articles" element={<Home />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    );
  }

  export default App;

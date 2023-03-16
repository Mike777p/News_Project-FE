  import { BrowserRouter, Routes, Route} from "react-router-dom";
  import { Home, ArticlePage, ErrorPage, CookingPage, CodingPage, FootballPage } from "./Pages/";
  import { Header } from "./Components/";
  const [user] = ([{
    username: 'butter_bridge',
    name: 'jonny',
    avatar_url:
      'https://www.healthytherapies.com/wp-content/uploads/2016/06/Lime3.jpg'
  }])

  function App() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/articles" element={<Home />} />
          <Route path="/articles/:article_id" element={<ArticlePage user={user} />} />
          <Route path="/newTopic/cooking" element={<CookingPage />} />
          <Route path="/newTopic/coding" element={<CodingPage />} />
          <Route path="/newTopic/football" element={<FootballPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    );
  }

  export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './utils/GlobalStyle';
import Navbar from './components/Navbar';
import RecordSearch from './pages/RecordSearch';
import RecordImage from './pages/RecordImage';
import RecommendFridge from './pages/RecommendFridge';
import SearchRestaurant from './pages/SearchRestaurant';
import AnalyzeDiet from './pages/AnalyzeDiet';
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import UserPage from './pages/UserPage';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Navbar>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/record-by-image" element={<RecordImage/>}/>
            <Route path="/record-by-keyword" element={<RecordSearch/>}/>
            <Route path="/analyze-diet" element={<AnalyzeDiet/>}/>
            <Route path="/recommend" element={<RecommendFridge/>}/>
            <Route path="/search" element={<SearchRestaurant/>}/>
            <Route path="/mypage" element={<UserPage/>}/>
            <Route path="/sign-in" element={<UserLogin/>}/>
            <Route path="/sign-up" element={<UserRegister/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Navbar>
    </BrowserRouter>
    </>
  );
}

export default App;

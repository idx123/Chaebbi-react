import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import styled, { css } from 'styled-components'
import Navbar from './components/Navbar'
import RecordSearch from './pages/RecordSearch'
import RecordImage from './pages/RecordImage'
import RecommendFridge from './pages/RecommendFridge'
import SearchRestaurant from './pages/SearchRestaurant'
import AnalyzeDiet from './pages/AnalyzeDiet'
import UserLogin from './pages/UserLogin'
import UserRegister from './pages/UserRegister'
import UserPage from './pages/UserPage'
import Landing from './pages/Landing'
import NotFound from './pages/NotFound'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <PageContainer isOpen={!isOpen}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/record-by-image" element={<RecordImage />} />
          <Route path="/record-by-keyword" element={<RecordSearch />} />
          <Route path="/analyze-diet" element={<AnalyzeDiet />} />
          <Route path="/recommend" element={<RecommendFridge />} />
          <Route path="/search" element={<SearchRestaurant />} />
          <Route path="/mypage" element={<UserPage />}>
            {/* <Route path="/user-record" element={<UserRecord />} />
            <Route path="" element={<UserInfo />} />
            <Route path="/user-bookmark" element={<UserBookmark />} /> */}
          </Route>
          <Route path="/sign-in" element={<UserLogin />} />
          <Route path="/sign-up" element={<UserRegister />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageContainer>
    </>
  )
}

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 6rem 3rem;
  margin-left: 30rem;
  transition: 0.1s all;

  ${({ isOpen }) =>
    !isOpen &&
    css`
      margin-left: 0rem;
    `}
`

export default App

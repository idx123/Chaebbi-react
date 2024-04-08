import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import styled, { css } from 'styled-components'
import Navbar from './components/Navbar'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page5 from './pages/Page5'
import Page4 from './pages/Page4'
import Page3 from './pages/Page3'
import UserLogin from './pages/UserLogin'
import UserRegister from './pages/UserRegister'
import AdminPage from './pages/AdminPage'
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
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/admin" element={<AdminPage />}>
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

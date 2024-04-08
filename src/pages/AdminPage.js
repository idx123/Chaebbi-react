import styled from 'styled-components'
import React, { useState } from 'react'
import { navItem } from '../utils/NavItem'

const AdminPage = () => {
  return (
    <AdminContainer>
      {navItem.map((i) => (
        <AuthWrapper key={i.id}>
          <b>페이지명</b> {i.name} / <b>경로</b> {i.path}
          <hr />
          <p>권한부여</p>
          <input type="checkbox" />
          <label></label>
        </AuthWrapper>
      ))}
    </AdminContainer>
  )
}

const AdminContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const AuthWrapper = styled.div`
  width: 50%;
  padding: 1rem;
  background-color: #fff;
`

export default AdminPage

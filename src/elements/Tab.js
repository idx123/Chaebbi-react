import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Outlet, Link, useLocation } from 'react-router-dom'

const Tab = ({ tabItem }) => {
  const location = useLocation()
  const [active, setActive] = useState(0)

  useEffect(() => {
    setActive(tabItem.findIndex((i) => location.pathname === i.path))
  }, [])

  return (
    <div>
      <TabsWrapper>
        {tabItem.map((i, idx) => (
          <TabLink
            to={i.path}
            key={idx}
            onClick={() => setActive(idx)}
            className={active === idx ? 'active' : ''}
          >
            {i.name}
          </TabLink>
        ))}
      </TabsWrapper>
      <SubpageContainer>
        <Outlet />
      </SubpageContainer>
    </div>
  )
}

const TabsWrapper = styled.div`
  display: flex;
  margin-left: 1.2rem;
`

const TabLink = styled(Link)`
  padding: 1rem 1.6rem;
  border: 1px solid var(--color-light-gray);
  border-bottom: none;
  border-radius: 1rem 1rem 0 0;

  &.active {
    background-color: var(--color-primary);
    font-weight: 700;
  }
`
const SubpageContainer = styled.div`
  min-height: 30rem;
  padding: 2.6rem;
  border: 1px solid var(--color-light-gray);
  border-radius: 1.5rem;
`

export default Tab

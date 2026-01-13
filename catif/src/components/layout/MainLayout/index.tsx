import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const MainLayout = () => {
  return (
    <LayoutWrapperStyle>
      <Navbar />
      <MainContentStyle>
        <Outlet />
      </MainContentStyle>
      <Footer />
    </LayoutWrapperStyle>
  )
}

const LayoutWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`

const MainContentStyle = styled.main`
  flex: 1;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
`

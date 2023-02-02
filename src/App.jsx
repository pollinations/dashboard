import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import styled from '@emotion/styled'

import TopBar from './components/NavBar'

import LoginPage from './pages/Login'
import SignUpPage from './pages/SignUp'

import AdminArea from './pages/Dashboard'
import Chart from './pages/Dashboard/chart'
import Billing from './pages/Dashboard/billing'
import Token from './pages/Dashboard/token'
import BillingHistory from './pages/Dashboard/billing_history'
import BillingPreferences from './pages/Dashboard/billing_preferences'
import UpdatePassword from './pages/UpdatePassword'

function App() {

  const { user } = useAuth();
  const { pathname } = useLocation();



  if (pathname === '/passwordupdate') return <Routes>
    <Route exact path='/passwordupdate' element={<UpdatePassword/>}/>
  </Routes>


  if (!user) return <Routes>
    <Route exact path='/' element={<LoginPage/>}/>
    <Route exact path='signuptest' element={<SignUpPage/>}/>
    <Route path='*' element={<Navigate to='/'/>}/>
  </Routes>

  return <Wrapper>
    <TopBar/>
    <Routes>
      <Route exact path='/' element={<Navigate to='/d'/>}/>
      <Route path='/d' element={<AdminArea/>}>
        <Route path='usage' element={<Chart/>}/>
        <Route path='billing'>
          <Route path='' element={<Billing />}/>
          <Route path='history' element={<BillingHistory />}/>
          <Route path='preferences' element={<BillingPreferences />}/>
        </Route>
        <Route path='token' element={<Token />}/>
      </Route>

    </Routes>
    
  </Wrapper>
}

export default App


const Wrapper = styled.div`
width: 100%;
max-width: 100vw;
min-height: 100vh;
`
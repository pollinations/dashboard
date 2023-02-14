import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import styled from '@emotion/styled'

import TopBar from './components/NavBar'

import LoginPage from './pages/Forms/Login'
import SignUpPage from './pages/Forms/SignUp'

import AdminArea from './pages/Dashboard'
import Chart from './pages/Dashboard/chart'
import Billing from './pages/Dashboard/billing'
import Token from './pages/Dashboard/token'
import BillingHistory from './pages/Dashboard/billing_history'
import BillingPreferences from './pages/Dashboard/billing_preferences'
import UpdatePassword from './pages/Forms/UpdatePassword'
import FormsPage from './pages/Forms'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchPreviousSession } from './supabase/user'
import ProtectedRoute from './routes/protectedRoutes'
import ProtectedRoutes from './routes/protectedRoutes'



function App() {
return <Wrapper>
    <TopBar/>
    <Routes>


      <Route exact path='/' element={<FormsPage/>}>
        <Route exact path='/' element={<LoginPage/>}/>
        <Route exact path='/signuptest' element={<SignUpPage/>}/>
        <Route exact path='/passwordupdate' element={<UpdatePassword/>}/>
      </Route>


      <Route element={<ProtectedRoutes/>}>
        <Route path='/d' element={<AdminArea/>}>
          <Route path='usage' element={<Chart/>}/>
          <Route path='billing'>
            <Route path='' element={<Billing />}/>
            <Route path='history' element={<BillingHistory />}/>
            <Route path='preferences' element={<BillingPreferences />}/>
          </Route>
          <Route path='token' element={<Token />}/>
        </Route>
      </Route>


      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
    
  </Wrapper>
}

export default App


const Wrapper = styled.div`
min-height: 100vh;
border-bo
`
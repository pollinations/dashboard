import { Navigate, Route, Routes } from 'react-router-dom'
import styled from '@emotion/styled'

import TopBar from './components/NavBar'

import LoginPage from './pages/Forms/Login'
import SignUpPage from './pages/Forms/SignUp'

import Usage from './pages/Dashboard/usage'
import UpdatePassword from './pages/Forms/UpdatePassword'
import FormsPage from './pages/Forms'
import ProtectedRoutes from './routes/protectedRoutes'
import ConfirmEmail from './pages/Forms/ConfirmEmail'
import DashboardWrapper from './pages/DashboardWrapper'
import UserToken from './pages/Dashboard/token'
import FormsWrapper from './pages/FormsWrapper'
import SocialLoginPage from './pages/Forms/SocialLogin'



function App() {
return <Wrapper>
    <TopBar/>
    <Routes>

      <Route element={<FormsWrapper/>}>
        <Route exact path='/' element={<SocialLoginPage/>}/>
        <Route exact path='/social' element={<SocialLoginPage/>}/>
        <Route exact path='/signuptest' element={<SignUpPage/>}/>
        <Route exact path='/passwordupdate' element={<UpdatePassword/>}/>
        <Route exact path='/emailconfirmation' element={<ConfirmEmail/>}/>
      </Route>

      <Route element={<ProtectedRoutes/>}>
        <Route element={<DashboardWrapper/>}>
          <Route exact path='/d' element={<UserToken/>}/>
          <Route exact path='/u' element={<Usage/>}/>
        </Route>
      </Route>

      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
    
  </Wrapper>
}

export default App

const Wrapper = styled.div`
min-height: 100vh;
`
import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Home } from './pages/Home'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
// import { SignIn } from './pages/SignIn'
// import { SignUp } from './pages/SignUp'
// import { Profile } from './pages/Profile'
import { New } from './pages/New'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      {/* <Home /> */}
      {/* <SignIn/> */}
      {/* <Profile/>  */}
      <New/>
     
    </ThemeProvider>

  </React.StrictMode>,
)

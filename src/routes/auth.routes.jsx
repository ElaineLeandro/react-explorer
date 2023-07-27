import { Routes, Route} from 'react-router-dom'


import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'


export function AuthRoutes(){
    <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/register' element={<SignIn/>}/>
    </Routes>
}

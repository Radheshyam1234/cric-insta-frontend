import React from "react";
import loadable from '@loadable/component'

const LoginForm = loadable(() => import('views/login-form/login-form'))

 const Login=()=>{
 return(
    <>
   <LoginForm/>
    </>
 )
}
export default Login
import React, {useContext} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Orders from '../components/Orders'
import { AuthContext } from '../context/AuthContext'
import Admin from '../components/Admin'
import Cookies from "universal-cookie";


const Account = () => {
  const cookies = new Cookies(null, { path: "/" });
  const token = cookies.get("token");

  const {userInfo} = useContext(AuthContext);

  return (
    <>
    <Header />
    {token && userInfo.role === "ADMIN" ? <Admin /> : token ? <Orders /> : <div class="d-flex justify-content-center align-items-center">
          <div class="alert alert-warning" role="alert">
            Veuillez d'abord vous connecter
          </div>
        </div>}
    
    <Footer />
    </>
  )
}

export default Account
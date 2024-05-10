import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import Cookies from "universal-cookie";
import ModalCustom from "./Modal";
import ModalLogout from "./ModalLogout";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { isLoading, userInfo, setUserInfo } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    //alert("userInfo: " + JSON.stringify(userInfo));
    //alert("isLoading: " + isLoading);
  }, [userInfo]);

  return (
    <header class="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <a
          href="/"
          class="d-inline-flex link-body-emphasis text-decoration-none"
        >
          <img
            src="/public/logo-officiel-JO-Paris-2024.webp"
            alt="logo"
            width="100"
            height="auto"
          />
        </a>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a href="/" className={`nav-link px-2 ${location.pathname === '/' ? 'link-secondary' : ''}`}>
            Home
          </a>
        </li>
        <li>
          <a href="/plans" className={`nav-link px-2 ${location.pathname === '/plans' ? 'link-secondary' : ''}`}>
            Plans
          </a>
        </li>
        <li>
          <a href="/autre" className={`nav-link px-2 ${location.pathname === '/autre' ? 'link-secondary' : ''}`}>
            Autre
          </a>
        </li>
      </ul>

      <div class="col-md-3 text-end">
        {userInfo && !isLoading ? (
          <>
            <button
              class="btn btn-outline-primary me-2"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Logout
            </button>
            <ModalLogout
              showModal={showModal}
              modalBody={"Etes-vous sûr de vouloir vous déconnecter ?"}
              modalTitle="Information"
              setShowModal={setShowModal}
            />
          </>
        ) : (
          <>
            <a href="/login" class="btn btn-outline-primary me-2">
              Login
            </a>
            <a href="/register" className="btn btn-primary ">
              Register
            </a>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Admin = () => {
    const cookies = new Cookies(null, { path: "/" });
    const token = cookies.get("token");
    
    if (!token) {
        return (
            <>
                <Header />
                <div>access-denied</div>
                <Footer />
            </>
        );
    }

    const decodedToken = jwtDecode(token);

    if (decodedToken.role !== "ADMIN") {
        return (
            <>
                <Header />
                <div>access-denied</div>
                <Footer />
            </>
        );
    }

    console.log(decodedToken.role);

    return (
        <>
            <Header />
            <div>admin page protected</div>
            <Footer />
        </>
    );
};

export default Admin;

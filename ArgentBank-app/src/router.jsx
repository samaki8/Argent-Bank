import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
//import SignOut from "./pages/SignOut";
function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                {/*<Route path="/signup" element={<Signup />} />
                {/*<Route path="/forgot" element={<ForgotPassword />} />*/}
                {/*<Route path="/reset" element={<ResetPassword />} />*/}
                {/*<Route path="/signout" element={<SignOut />} />
                {/*<Route path="/account" element={<Account />} /> */}
                <Route path="/profile" element={<Profile />} />
                {/* <Route path="/transfer" element={<Transfer />} /> */}
                {/* <Route path="/deposit" element={<Deposit />} /> */}
                {/* <Route path="/withdraw" element={<Withdraw />} /> */}
                {/*<Route path="/404" element={<NotFound />} />*/}
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;
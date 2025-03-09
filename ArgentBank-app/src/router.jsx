import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import User from "./Pages/User";
import Error from "./Pages/Error";
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
                <Route path="/user" element={<User />} />
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
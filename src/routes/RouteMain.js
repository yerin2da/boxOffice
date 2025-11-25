
import {Routes, Route, Navigate} from "react-router-dom";
import Layout from "../layouts/Layout";
import PrivateRoute from "./PrivateRoute";
import Main from "../pages/main/Main";
import Login from "../pages/Login";

export default function RouteMain() {
    return (
        <Routes>

            <Route element={<Layout />}>{/* (공통 레이아웃) */}

                {/* 메인 */}
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />{/* 로그인 */}

                {/*  로그인한 사용자만 접근 가능 */}
                <Route element={<PrivateRoute />}>

                </Route>

            </Route>
        </Routes>
    );
}

{/*<Route path="/rest" element={<Rest />} />*/}

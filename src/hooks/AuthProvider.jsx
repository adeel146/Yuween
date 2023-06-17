import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import AdminLayout from '../components/layouts/adminlayout/AdminLayout';
import { useSelector } from 'react-redux';

const AuthProvider = () => {


    const RequireAuth = ({ children }) => {
        const token = useSelector((state) => state.userAuth.loginInfo.token);
        let location = useLocation();
        if (!token) {
            return <Navigate to="/signin" state={{ from: location }} replace />;
        }
        return children;
    };
    return (
        <RequireAuth>
            <AdminLayout />
        </RequireAuth>
    )
}

export default AuthProvider
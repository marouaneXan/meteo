import React, { createContext, useMemo, useState } from 'react';
import { Proxy } from '../config/Proxy';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(null)
    const register = async (data) => {
        setLoading(true)
        const res = await axios.post(Proxy+'register', data)
        if (res && res.data) {
            setLoading(false)
            setSuccess(res.data.message)
        }
    }

    const values = useMemo(
        () => ({
            register, loading,success
        }),
        [register, loading,success]
    );

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthContextProvider
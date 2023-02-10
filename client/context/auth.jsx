import React, { createContext, useMemo, useState } from 'react';
import { Proxy } from '../config/Proxy';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(null)
    const register = async (data, navigation) => {
        setLoading(true)
        const res = await axios.post(Proxy + 'register', data)
        if (res && res.data) {
            setLoading(false)
            setSuccess(res.data.message)
            await AsyncStorage.setItem('name', res.data.name);
            setTimeout(() => {
                navigation.navigate('Weather')
            }, 2000)
        }
    }

    const values = useMemo(
        () => ({
            register, loading, success
        }),
        [register, loading, success]
    );

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthContextProvider
import React, { createContext, useMemo, useState } from 'react';
import { Alert } from 'react-native';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    

    const values = useMemo(
        () => ({
            
        }),
        []
    );

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthContextProvider
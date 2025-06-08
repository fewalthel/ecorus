import {type CitiesEntity, type LanguageEnum} from "./app/models/generated";
import {createContext, useContext, useState} from "react";

interface AppContextType {
    user:  AuthorizedUser | null;
    setUser: (user:  AuthorizedUser  | null) => void;
    isAuthenticated: boolean;
    city: CitiesEntity | null;
    setCity: (city: CitiesEntity | null) => void
}

interface AuthorizedUser {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    isEmailVerified: boolean;
    language: LanguageEnum;
    accessToken: string;
    refreshToken: string
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({children}: { children: React.ReactNode }) {
    const [currentUser, setCurrentUser] = useState< AuthorizedUser | null>(null);
    const [city, setCity] = useState<CitiesEntity | null>(null)

    const value: AppContextType = {
        user: currentUser,
        setUser: setCurrentUser,
        isAuthenticated: !!currentUser,
        city: city,
        setCity: setCity
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within a AppProvider');
    }
    return context;
}

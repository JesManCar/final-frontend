import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

// eslint-disable-next-line react-refresh/only-export-components
export const PetsContext = createContext();

export const PetsProvider = ({ children }) => {
    const [pets, setPets] = useState([]);

    const load = (Pets) => {
        setPets(Pets);
        Cookies.set('pets', JSON.stringify(Pets));
    }
    useEffect(() => {
        const savedPets = Cookies.get('pets');
        if (savedPets) {
            setPets(JSON.parse(savedPets));
        }
    }, []);

    return (
        <PetsContext.Provider value={{ pets, load }}>
        {children}
        </PetsContext.Provider>
    );
}
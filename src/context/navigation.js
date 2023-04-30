
import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

// Instead of the function definition below, I could have 
// said 'function NavigationProvider() {...}' as we've been 
// doing with all our other components.
const NavigationProvider = ({children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handler);

        const cleanup = () => {
            window.removeEventListener('popstate', handler);
        };
        return cleanup;
    }, []);

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    };

    return (
        <NavigationContext.Provider value={{currentPath, navigate}}>
            {children}
        </NavigationContext.Provider>
    );
};

export { NavigationProvider };
export default NavigationContext;

import { useState } from "react"

export const useUserData = () => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [email, setEmail] = useState('');

    return {
        email,
        isAuthorized,
    }
}
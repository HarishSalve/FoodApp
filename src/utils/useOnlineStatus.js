import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() =>{
        window.addEventListener("offline", () =>{
            setIsOnline(false)
        })
        window.addEventListener("online", () =>{
            setIsOnline(true)
        })
    },[])

    return isOnline;
    
}


export  default useOnlineStatus
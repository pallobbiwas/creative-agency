import { useEffect, useState } from "react";

const useAdmin = (user) => {

    const[admin, setAdmin] = useState(true);
    const[adminLoading, setAdminLoading] = useState(false);

    useEffect(()=>{
        fetch(`http://localhost:5000/users/${user?.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user])
    return[admin];

}
export default useAdmin;
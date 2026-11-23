import React from "react"
import { useParams } from "react-router"

function User(){
    const {userid} = useParams();
    return(
        <h1 className = "text-center text-bold bg-green-500 text-white">User : {userid}</h1>
    )
}

export default User
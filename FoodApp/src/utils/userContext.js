import { createContext } from "react";

const userContext = createContext({
    loggedIn_User : "default_user",
})

export default userContext

import ContextReducer from "../helpers/ContextReducer";

import UserProvider from "./AuthContext";


const providers: any = [UserProvider];

const AppContextProvider = ContextReducer(...providers);

export default AppContextProvider;

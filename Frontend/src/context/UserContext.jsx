import { createContext, useState } from "react";

export const UserContext = createContext({});

const UserProvider = ({ Children }) => {
  const [userer, setUser] = useState([
    { id: 1, name: "sabbir" },
    { id: 2, name: "rafi" },
  ]);

  return (
    <UserContext.Provider value={{ userer }}>{Children}</UserContext.Provider>
  );
};
export default UserProvider;

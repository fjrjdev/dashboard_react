import { createContext, useState } from "react";
import api from "../../services";

export const StatesContext = createContext();

export const StatesProvider = ({ children }) => {
  const [file, setFile] = useState();
  const [tab, setTab] = useState(0);
  const [loading, setLoading] = useState(false);

  const getAllRequest = (data) => {
    setLoading(true);
    api
      .get("transactions/")
      .then((response) => console.log(response.data))
      .finally(() => setLoading(false));
  };

  return (
    <StatesContext.Provider
      value={{ file, setFile, tab, setTab, getAllRequest, loading }}
    >
      {children}
    </StatesContext.Provider>
  );
};

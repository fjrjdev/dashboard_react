import { createContext, useState } from "react";
import api from "../../services";

export const StatesContext = createContext();

export const StatesProvider = ({ children }) => {
  const [file, setFile] = useState();
  const [tab, setTab] = useState(0);
  const [data, setData] = useState([]);
  const [dataByStore, setDataByStore] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllRequest = (data) => {
    setLoading(true);
    api
      .get("transactions/")
      .then((response) => console.log(response.data))
      .finally(() => setLoading(false));
  };

  const getByStoreRquest = (store) => {
    setLoading(true);
    api
      .get(`transactions/stores/${store}/`)
      .then((response) => console.log(response.data))
      .finally(() => setLoading(false));
  };
  const uploadFile = (file) => {
    console.log(file);
    setLoading(true);
    api
      .post(`/transactions/upload/`)
      .then((response) => console.log(response.data))
      .finally(() => setLoading(false));
  };
  return (
    <StatesContext.Provider
      value={{
        file,
        setFile,
        tab,
        setTab,
        getAllRequest,
        getByStoreRquest,
        uploadFile,
        loading,
        data,
        setData,
        dataByStore,
      }}
    >
      {children}
    </StatesContext.Provider>
  );
};

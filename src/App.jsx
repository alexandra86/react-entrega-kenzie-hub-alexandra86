import {React, useState} from "react";
import { Routes, Route } from "react-router-dom";
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";
import {HomePage} from "./pages/HomePage";
import { toast, ToastContainer } from 'react-toastify';
import {api} from "./services/axiosClient.js";


function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);


  async function newLogin(data){
    try {
      setLoading(true)
      const response = await api.post("sessions", data);
      localStorage.setItem("@TOKEN", response.data.token)
      setUser(response.data)
      toast.success("Login relizado com sucesso!");

    } catch (error) {
      toast.error("Usuário não encontrado!");
    } finally {
      setLoading(false)
    }
  };


  return (
    <>
    <Routes>
      <Route path="/" element={ <LoginPage newLogin={newLogin}/> } />
      <Route path="/register" element={ < RegisterPage/> } />
      <Route path="/home" element={ < HomePage user={user}/> } />
    </Routes>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </>
  );
}

export default App;

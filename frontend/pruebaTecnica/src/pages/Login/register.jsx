import React, { useState } from 'react';

export const FormRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-9 m-4 border-2 border-gray-300 rounded-lg shadow-lg bg-white">
        <h2 className="text-center text-xl mb-6">Formulario de Registro</h2>

        <form className="registro-form flex flex-col justify-center items-center">
          <div className="form-group m-4">
            <label className="font-semibold">Correo:</label>
            <input
              className="border-2 p-2 ml-3 rounded-sm"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su correo"
            />
          </div>

          <div className="form-group m-4">
            <label className="font-semibold">Nombre:</label>
            <input
              className="border-2 p-2 ml-3 rounded-sm"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ingrese su nombre"
            />
          </div>

          <div className="form-group m-4">
            <label className="font-semibold">Contraseña:</label>
            <input
              className="border-2 p-2 ml-3 rounded-sm"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese su contraseña"
            />
          </div>

          <button
            type="submit"
            className="bg-sky-500 text-lg text-white w-min rounded-sm p-2 mt-4"
          >
            Registrar
          </button>
        </form>
      </div>
      </div>
      
    </>
  );
};

export default FormRegister;
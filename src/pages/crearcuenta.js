import React, {useState, useContext, useEffect} from "react"
import Layout from "@/components/Layout"
import Alerta from "@/components/Alerta"
import Mensaje from "@/components/Mensaje"
import authContext from "@/context/auth/authContext"

export default function CrearCuenta() {

    // Acceder al state
    const AuthContext = useContext(authContext)
    const { mensaje, registrarUsuario } = AuthContext


    const [ nombre, setNombre ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ alerta, setAlerta ] = useState({})

    // Validación
    const handleSubmit = e => {
        e.preventDefault()

        if([nombre, email, password].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            setTimeout(() => {
                setAlerta({})
            }, 3000);
            return
        }
        if(password.length < 6) {
            setAlerta({
                msg: 'El password debe contener al menos 6 caracteres',
                error: true
            })
            setTimeout(() => {
                setAlerta({})
            }, 3000);
            return
        }

        registrarUsuario({nombre, email, password})
    }

    const { msg } = alerta

  return (
    <Layout>
      <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
        <h2 className="text-4xl font-sans font-bold text-gray-800 text-center my-4">Crear Cuenta</h2>

        {mensaje && <Mensaje />}

        <div className="flex justify-center mt-5">
            <div className="w-full max-w-lg">
                <form 
                    className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
                    onSubmit={handleSubmit}
                >
                    {msg && <Alerta alerta={alerta} />}
                    <div className="mb-4">
                        <label 
                            className="block text-black text-sm font-bold mb-2"
                            htmlFor="nombre"
                        >Nombre</label>
                        <input 
                            type="text"
                            className="shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-toght focus:outline-none focus:shadow-outline" 
                            id='nombre'
                            placeholder="Nombre de Usuario"
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label 
                            className="block text-black text-sm font-bold mb-2"
                            htmlFor="email"
                        >Email</label>
                        <input 
                            type="email"
                            className="shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-toght focus:outline-none focus:shadow-outline" 
                            id='email'
                            placeholder="Email de Usuario"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label 
                            className="block text-black text-sm font-bold mb-2"
                            htmlFor="password"
                        >Password</label>
                        <input 
                            type="password"
                            className="shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-toght focus:outline-none focus:shadow-outline" 
                            id='password'
                            placeholder="Tu Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <input 
                        type="submit"
                        className="bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold" 
                        value='Crear Cuenta'
                    />
                </form>
            </div>
        </div>
      </div>
    </Layout>
  )
}
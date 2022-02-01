import { createContext, useContext, useState } from "react";

export const GameContext = createContext()

export const useGame = () => {return useContext(GameContext)}

export const CartProvider = ({children}) =>{
    const [carro, setCarro] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [carroVisible, setVisibilidad] = useState(false)


    const agregarAlCarro = (game) =>{
        if(carro.find(x => x.id === game.id)){
            return alert("You already have this game in your cart")
        }
        setCarro([
            ...carro,
            game,
        ])
        setCantidad(cantidad + 1)
    }
    const mostrarCarro = () =>{
        setVisibilidad(!carroVisible)
    }

    const removeFromCart = (game) =>{
        let indice = carro.indexOf(carro.find(x => x.id === game.id))
        carro.splice(indice,1)
        setCarro([...carro])
        setCantidad(cantidad - 1)
    }

    return(
        <GameContext.Provider value={{carro, cantidad, carroVisible, agregarAlCarro, mostrarCarro, removeFromCart}}>{children}</GameContext.Provider>
    )
}
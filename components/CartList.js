import Image from "next/image";
import {useGame} from "../context/CartContext"

const CartList = () =>{
    const {carro, cantidad, removeFromCart} = useGame()
        return(
            <div className="detalles">
                <ul>
                    {carro.map(x =>
                     <li key={x.id} className="producto">
                         <Image alt={x.title} src={x.thumbnail} className="img-lista" width={150} height={100} priority/>
                        {x.title}
                        <button className="button-delete" onClick={() => removeFromCart(x)}>Delete</button>
                    </li>)}
                    {cantidad === 0 ? <p className="cantidad-prod">There are no products assigned</p> :  <p className="cantidad-prod">Total price for {cantidad} products: ${cantidad * 1000}</p> }
                </ul>
            </div>
        )
}

export default CartList;
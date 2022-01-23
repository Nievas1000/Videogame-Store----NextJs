import Image from "next/image";


const CartList = ({...props}) =>{
        const carro = props.carro;
        const cantidad = props.cantidad
        return(
            <div className="detalles">
                <ul>
                    {carro.map(x =>
                     <li key={x.id} className="producto">
                         <Image alt={x.title} src={x.thumbnail} className="img-lista" width={150} height={100} priority/>
                        {x.title}
                    </li>)}
                    {props.cantidad === 0 ? <p className="cantidad-prod">There are no products assigned</p> :  <p className="cantidad-prod">Total price for {cantidad} products: ${props.cantidad * 1000}</p> }
                </ul>
            </div>
        )
}

export default CartList;
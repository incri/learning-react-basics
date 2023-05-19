
interface Props{
    cartItems : string[]
    onClear : () => void
  }

function Cart({cartItems, onClear}: Props) {

    return (
        <>  
            <h1>Cart Items</h1>
            <ul className="list-group">
            {cartItems.map((item) => <li key={item}>{item}</li>)}
            </ul>

            <button onClick={onClear}>Clear</button>
        </>
    )
}

export default Cart

interface Props{
  onClick: () => void;
}

const Mart = ({onClick}: Props) => {
  return (
    <button onClick={onClick}>Add Quantity</button>
  )
}

export default Mart

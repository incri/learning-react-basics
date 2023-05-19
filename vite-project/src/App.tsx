import ListGroup from "./components/ListGroupComponent";
import Alert  from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import {SiSololearn} from "react-icons/si";
import Like from "./components/Like";
import Mart from "./components/Mart";
import Bug from "./components/Bug";

function app() {

  let item = [
    'Air',
    'Water',
    'Earth',
    'Fire'
  ]

  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  true
  
  const [cart, setcart] = useState({
    discount: .1,
    item: [
      {id:1 , title: 'Product 1', quantity:1},
      {id:2 , title: 'Product 2', quantity:2}
    ]
  });

  const handleClick = () => {
    setcart({...cart, item: cart.item.map(item => item.id === 1? {...item, quantity:item.quantity+1}:item)})
    console.log(cart.item)
  }

  const [bugs, setBugs] = useState(
    [
      {id:1 , title: 'Product 1', fixed:false},
      {id:2 , title: 'Product 2', fixed:false}
    ]
  );

  const handleBug = () => {
    setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true}: bug))
  }

  const [alertVisible, setAlertVisible] = useState(false)
  return (
    <>
     {alertVisible && <Alert children="You have been alert" onClose={() => setAlertVisible(false)}/>}
      <div>
        <ListGroup items={item} heading="Cities" onSelectItem={handleSelectItem}/>
      </div>
      <Button children= {<SiSololearn size="30"/>} onClick={() => setAlertVisible(true)} />
      <Like onClick={() => console.log("Liked")}/>
      <Mart  onClick={() => handleClick()} />
      <Bug onClick={() => handleBug()}/>

    </>
    


  );



}


export default app

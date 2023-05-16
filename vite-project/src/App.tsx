import ListGroup from "./components/ListGroupComponent"
import Alert  from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import {SiSololearn} from "react-icons/si"
import Like from "./components/Like";

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

  const [alertVisible, setAlertVisible] = useState(false)
  return (
    <>
     {alertVisible && <Alert children="You have been alert" onClose={() => setAlertVisible(false)}/>}
      <div>
        <ListGroup items={item} heading="Cities" onSelectItem={handleSelectItem}/>
      </div>
      <Button children= {<SiSololearn size="30"/>} onClick={() => setAlertVisible(true)} />
      <Like onClick={() => console.log("Liked")}/>
    </>
    


  );



}

export default app
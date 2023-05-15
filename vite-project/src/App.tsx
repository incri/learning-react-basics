import ListGroup from "./components/ListGroupComponent"

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
  return (

    <div>
      <ListGroup items={item} heading="Cities" onSelectItem={handleSelectItem}/>
    </div>


  );



}

export default app
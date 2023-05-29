import ListGroup from "./components/ListGroupComponent";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import { SiSololearn } from "react-icons/si";
import Like from "./components/Like";
import Mart from "./components/Mart";
import Bug from "./components/Bug";
import { produce } from "immer";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import Expandable from "./components/Expandable";
import Form from "./components/Form";
import ProductList from "./components/ProductList";
import axios from "axios";
import { useEffect } from "react";

interface User {
  id: number;
  name: string;
}

function app() {
  let item = ["Air", "Water", "Earth", "Fire"];

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  let emptys = [];
  const [categories, setCategories] = useState("");
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  true;

  const [cart, setcart] = useState({
    discount: 0.1,
    item: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setcart({
      ...cart,
      item: cart.item.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleBug = () => {
    // setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true}: bug))
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id == 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  const [alertVisible, setAlertVisible] = useState(false);

  const [cartItems, setCartItems] = useState(["item 1", "item 2", "item 3"]);

  let text =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. \
  Ratione enim placeat cupiditate nam! Necessitatibus expedita earum l\
  aboriosam nesciunt architecto dolorum animi possimus voluptatem et i \
  nventore nam fugiat fuga, dolores laborum quas asperiores suscipit \
  accusantium ratione soluta corrupti explicabo officiis nobis at. Pariatur \
  quibusdam reiciendis architecto error voluptate soluta dolorem unde! Ratione, \
  provident? Nisi accusamus excepturi quod odio delectus alias! Ipsam repudiandae \
  nemo vitae consectetur enim optio nobis officiis, reprehenderit unde soluta \
  accusamus aliquid, fugit similique culpa exercitationem molestias quod quia t \
  empora! Minus amet fugit harum rerum veniam soluta aliquam, illum asperiores \
  tempora, debitis accusantium quos officiis quam modi animi accusamus?";

  return (
    <>
      {alertVisible && (
        <Alert
          children="You have been alert"
          onClose={() => setAlertVisible(false)}
        />
      )}
      <div>
        <ListGroup
          items={item}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
      <Expandable maxChar={100}>{text}</Expandable>
      <Button
        children={<SiSololearn size="30" />}
        onClick={() => setAlertVisible(true)}
      />
      <Like onClick={() => console.log("Liked")} />
      {cart.item.map((item) => (
        <p key={item.id}>
          {item.title} = {item.quantity}
        </p>
      ))}
      <Mart onClick={() => handleClick()} />
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}
      <Bug onClick={() => handleBug()} />

      <div>
        <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
        <Nav cartItemCount={cartItems.length} />
      </div>
      <div>
        <Form />
        <ProductList categories={categories} />
      </div>
      <div>
        <select
          className="form-select"
          onChange={(event) => setCategories(event.target.value)}
        >
          <option value=""></option>
          <option value="Clothing">Clothing</option>
          <option value="Household">HouseHold</option>
        </select>
      </div>
      <div>
        <h2>Data from jsonPlaceHolder</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default app;

import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏕️ Far Away 🎒</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(1);
  function handleFormSubmit(e) {
    e.preventDefault();
    if (!description) {
      return;
    }
    const newItem = { description, value, packed: false, id: Date.now() };
    console.log(newItem);
    setDescription("");
    setValue(1);
  }
  return (
    <form className="add-form" onSubmit={handleFormSubmit}>
      <h3> What do you need for your trip</h3>
      <select
        value={value}
        onChange={(e) => {
          console.log(e.target.value);
          setValue(+e.target.value);
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <ul className="list">
      <li>
        {initialItems.map((items) => {
          console.log(items);
          return <ListItem items={items} key={items.id} />;
        })}
      </li>
    </ul>
  );
}
// {id: 2, description: 'Socks', quantity: 12, packed: false}
function Stats() {
  return (
    <footer className="stats">
      <em>🎒You have 6 items on your list, you already have packed 0%</em>
    </footer>
  );
}
function ListItem({ items: { id, description, quantity, packed } }) {
  return (
    <>
      <input type="checkbox" />
      <span
        style={packed ? { textDecoration: "line-through" } : {}}
      >{`${quantity} ${description}`}</span>
      <button>❌</button>
    </>
  );
}

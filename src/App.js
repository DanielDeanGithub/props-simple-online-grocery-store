import GroceryItem from "./GroceryItem";

function App() {
  const GroceryItems = ["eggs", "Banana", "Strawberry", "Bread"];
  return (GroceryItems.map(e => <GroceryItem name={e} onClick={() => alert(e)} />));
};

export default App;

import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Astana", "Shymkent", "Almaty"];

  return (
    <div>
      <ListGroup heading="Taraz" items={items} onSelectItem={() => {}} />
    </div>
  );
}

export default App;

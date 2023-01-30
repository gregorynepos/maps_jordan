import "./styles.css";

export default function App() {
  const bascket = [
    { name: "jordan 9", priceHt: 510 },
    { name: "jordan 4", priceHt: 615 },
    { name: "jordan 5", priceHt: 820 }
  ];
  const client = () => {
    for (let i = 0; i < bascket.length; i++) {
      document.write(bascket[i].name, bascket[i].priceHt * 0.2);
    }
  };
  return (
    <div className="App">
      {bascket.map((tab, i) => {
        return (
          <li key={i}>
            {tab.name} : {tab.priceHt}
          </li>
        );
      })}
      <button onClick={client}>click</button>
    </div>
  );
}

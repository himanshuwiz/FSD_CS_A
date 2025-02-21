const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);

function Greeting({name, age, city} = {name: "Guest", age: 18, city: "Delhi"}) {
    return React.createElement("div", null, `Hello, ${name}! You are ${age} years old and you live in ${city}.`);
}

function App() {
    return (
        <div>
            <Greeting name="Sara" age="18" city="ghaziabad"/>
            <Greeting name="nik" age="20" city="faridabad"/>
        </div>
  );
}

root.render(<App />);
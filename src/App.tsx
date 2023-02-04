import { memo, useState } from "react";

interface GreetingProps {
  name: string;
}

const Greeting = memo(function Greeting({ name }: GreetingProps) {
  console.log("rendering greeting");
  return <h1>Hello, {name}!</h1>;
});

function App() {
  const [generation, setGeneration] = useState(1);
  const nextGen = () => {
    setGeneration(generation + 1);
  };
  const ozakiName =
    generation === 1 ? "ozaki zakio" : "ozaki zakio " + generation;
  return (
    <div>
      <Greeting name={ozakiName} />
      <button type="button" onClick={nextGen}>
        born
      </button>
    </div>
  );
}

export default App;

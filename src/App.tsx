import { memo } from "react";

interface GreetingProps {
  name: string;
}

const Greeting = memo(function Greeting({ name }: GreetingProps) {
  return <h1>Hello, {name}!</h1>;
});

function App() {
  return (
    <div>
      <Greeting name="ozaki zakio" />
    </div>
  );
}

export default App;

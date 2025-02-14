import { useStore } from "./store";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import "./App.css";

function App() {
  const { count, increment, decrement, reset } = useStore();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Card className="w-[350px] p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">React PWA v1</h1>
        <div className="flex flex-col items-center gap-4">
          <p className="text-4xl font-bold">{count}</p>
          <div className="flex gap-2">
            <Button onClick={decrement}>-</Button>
            <Button onClick={increment}>+</Button>
          </div>
          <Button variant="outline" onClick={reset}>
            Reset
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default App;

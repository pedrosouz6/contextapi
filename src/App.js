import Count from "./components/Count/index";
import Mirror from "./components/Mirror/index";
import Button from "./components/Button/index";
import Counter from "./context/Count";

export default function App() {
  return (

    <Counter>
      <Count/>
      <Mirror/>
      <Button/>
    </Counter>

  )
}
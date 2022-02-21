import { useCount } from "../../context/Count";

export default function Count() {

    const { count, setCount } = useCount();

    return (
        <button 
        onClick={() => setCount(count + 1)}> Count + 1 </button>
    )
  }
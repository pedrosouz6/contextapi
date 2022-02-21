import { useCount } from "../../context/Count";

export default function Count() {

    const { count } = useCount();

    return (
      <>
      <p><strong>Count:</strong> {count}</p>
      </>
    )
  }
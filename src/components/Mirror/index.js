import { useCount } from "../../context/Count";

export default function Mirror() {

    const { count } = useCount();

    return (
      <>
      <p><strong>Mirror:</strong> { count }</p>
      </>
    )
  }
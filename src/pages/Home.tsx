import { useSelector } from "react-redux";
import type { RootState } from "../store";

const Home = () => {
  const data: string = useSelector((state: RootState) => state.auth.name);
  console.log(data);

  return <div>Home</div>;
};

export default Home;

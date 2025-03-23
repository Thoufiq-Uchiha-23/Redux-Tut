import { useAppSelector } from "./redux/hooks";

const MyComp: React.FC = () => {
  const count = useAppSelector((s) => s.counter);
  return (
    <div>
      <h1>MyComp: {count}</h1>
    </div>
  );
};

export default MyComp;

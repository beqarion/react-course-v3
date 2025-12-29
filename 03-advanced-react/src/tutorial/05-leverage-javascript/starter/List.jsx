import { people } from "../../../data";
import { Person } from "./Person";

const List = () => {
  return (
    <ul>
      {people.map((p) => {
        return <Person key={p.id} {...p} />;
      })}
    </ul>
  );
};
export default List;

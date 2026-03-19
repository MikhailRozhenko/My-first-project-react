import Catinfo from './Cat';

import { type Cat } from '../types/cat';

interface catListProps {
  cats: Cat[];
}

export default function CatList(props: catListProps) {
  return (
    <ul>
      {props.cats.map(cat => (
        <li key={cat.id}>
          <Catinfo cat={cat} />
        </li>
      ))}
    </ul>
  );
}

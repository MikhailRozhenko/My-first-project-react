// src/components/App.tsx

import catsData from '../types/cats.json';
import css from './App.module.css';
import CatList from './СatList';

// export default function App() {
//   return (
//     <>
//       <h1>Best selling</h1>

//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
//         price={14.29}
//       />
//     </>
//   );
// }

// interface Book {
//   id: string;
//   name: string;
// }

// const books: Book[] = [
//   { id: 'id-1', name: 'JS for beginners' },
//   { id: 'id-2', name: 'React basics' },
//   { id: 'id-3', name: 'React Query overview' },
// ];

// export default function App() {
//   return (
//     <>
//       <h1>Books of the week</h1>
//       <ul>
//         {books.map(book => (
//           <li key={book.id}>{book.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// src/components/App.tsx

// import Alert from './Alert';

// export default function App() {
//   return (
//     <>
//       <Alert />
//       <Alert type="success" />
//       <Alert type="error" />
//     </>
//   );
// }

// src/components/App.tsx

// import Button from './Button';

// export default function App() {
//   return (
//     <>
//       <Button text="click me" />
//       <Button variant="primary" text="Login" />
//       <Button variant="secondary" text="Follow" />
//     </>
//   );
// }

//   {
//     "id": 1,
//     "name": "Mr. Whiskerson",
//     "age": 3,
//     "email": "whiskerson@catmail.com",
//     "image": "https://cataas.com/cat/says/Hello",
//     "available": true
//   }

export default function App() {
  const availableCats = catsData.filter(cat => cat.available);
  const takenCats = catsData.filter(cat => !cat.available);
  return (
    <>
      <div className={css.container}>
        <h2>Available cats</h2>
        <CatList cats={availableCats} />
        <h2>Taken Cats</h2>
        <CatList cats={takenCats} />
      </div>
    </>
  );
}

// src/components/App.tsx

import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

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

// export default function App() {
//   const availableCats = catsData.filter(cat => cat.available);
//   const takenCats = catsData.filter(cat => !cat.available);
//   return (
//     <>
//       <div className={css.container}>
//         <h2>Available cats</h2>
//         <CatList cats={availableCats} />
//         <h2>Taken Cats</h2>
//         <CatList cats={takenCats} />
//       </div>
//     </>
//   );
// }

// src/components/App.tsx

// export default function App() {
//   const handleClick = () => {
//     console.log("I'm a button!");
//   };

//   return <button onClick={handleClick}>Click me!</button>;
// }

// export default function App() {
//   return <button onClick={() => console.log('Clicked!')}>Click me!</button>;
// }

// export default function App() {
//   const handleClick = event => {
//     console.log(event); // Об'єкт події
//   };

//   return (
//     <>
//       <button onClick={handleClick}>First button</button>
//       <button onClick={event => console.log(event)}>Second button</button>
//     </>
//   );
// }

// export default function App() {
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     console.log('Clicked', event);
//     console.log('clicked', event.target);
//   };

//   return <button onClick={handleClick}>Click me!</button>;
// }

// Пояснення:

// event – це об'єкт події;
// React.MouseEvent – тип події;
// HTMLButtonElement – тип елемента, до якого прикріплена подія (<button>);

// 1. Імпортуємо функцію useState

// interface InventoryProps {
//   BMW: number;
//   Audi: number;
//   Mercedes: number;
//   Volkswagen: number;
//   Skoda: number;
//   Lexus: number;
// }

// export default function App() {
//   const [Inventory, setInventory] = useState<InventoryProps>({
//     BMW: 0,
//     Audi: 0,
//     Mercedes: 0,
//     Volkswagen: 0,
//     Skoda: 0,
//     Lexus: 0,
//   });

//   const clickHanter = (type: keyof InventoryProps) => {
//     setInventory({
//       ...Inventory,
//       [type]: Inventory[type] + 1,
//     });
//   };

//   return (
//     <div>
//       <h1>Inventory Tracker</h1>
//       <button onClick={() => clickHanter('BMW')}>BMW{Inventory.BMW}</button>
//       <button onClick={() => clickHanter('Audi')}>Audi {Inventory.Audi}</button>
//       <button onClick={() => clickHanter('Mercedes')}>
//         Mercedes{Inventory.Mercedes}
//       </button>
//       <button onClick={() => clickHanter('Volkswagen')}>
//         Volkswagen{Inventory.Volkswagen}
//       </button>
//       <button onClick={() => clickHanter('Skoda')}>
//         Skoda{Inventory.Skoda}
//       </button>
//       <button onClick={() => clickHanter('Lexus')}>
//         Lexus{Inventory.Lexus}
//       </button>
//     </div>
//   );
// }

// // src/components/App.tsx
// import { ClipLoader } from 'react-spinners';

// import { fetchArticles } from '../services/articleService';
// import type { Article } from '../types/articles';
// import Articles from './Articles';
// import OrderForms from './OrderForm';

// export default function App() {
//   const [articles, setArticles] = useState<Article[]>([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const [isError, setIsError] = useState(false);
//   const handleSearch = async (topic: string) => {
//     try {
//       setIsLoading(true);
//       setIsError(false);
//       const data = await fetchArticles(topic);

//       setIsLoading(false);

//       s  } catch {
//     etArticles(data);
//     setIsError(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <SearchForm onSubmit={handleSearch} />

//       {isLoading && <ClipLoader size={40}></ClipLoader>}
//       {isError && <p>Whoops, something went wrong! Please try again!</p>}
//       <Articles items={articles} />
//       <OrderForms />
//     </>
//   );

// export default function App() {
//   const [person, setPerson] = useState(null);

//   useEffect(() => {
//     console.log('Effect ran!');
//     axios
//       .get('https://swapi.info/api/people/1')
//       .then(response => setPerson(response.data));
//   }, []);

//   console.log('App rendred!');

//   return (
//     <>
//       <pre>{JSON.stringify(person, null, 2)}</pre>
//     </>
//   );
// }

// src/components/App.tsx

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    const savedState = localStorage.getItem('sidebar-state');

    try {
      return savedState ? JSON.parse(savedState) : false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem('sidebar-state', JSON.stringify(isSidebarOpen));
  }, [isSidebarOpen]);
  return (
    <>
      <button
        onClick={() => {
          setIsSidebarOpen(true);
        }}
      >
        Open Sidebar
      </button>
      {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}
    </>
  );
}

//   const [person, setPerson] = useState(null);
//   const [count, setCount] = useState(1);

//   useEffect(() => {
//     async function getPerson() {
//       const response = await axios.get(
//         `https://swapi.info/api/people/${count}`,
//       );
//       setPerson(response.data);
//     }

//     getPerson();
//   }, [count]);

//   useEffect(() => {
//     console.log('effect', count);
//   }, [count]);

//   return (
//     <>
//       {/* <h1>{person && person.name}</h1> */}
//       {/* <button onClick={() => setCount(count + 1)}>{count}</button> */}
// 	  </>

// import { useState } from 'react';

// interface Article {
//   id: number;
//   title: string;
//   body: string;
// }

// interface ReaderProps {
//   items: Article[];
// }

// export default function Articles({ items }: ReaderProps) {
//   const [itemIdx, Itemset] = useState<number>(0);

//   const handleClick = () => {
//     Itemset(itemIdx + 1);
//   };

//   const handleClickprev = () => {
//     Itemset(itemIdx - 1);
//   };

//   const currentArticle = items[itemIdx];

//   const isfirstItem = itemIdx === 0;

//   const lastItem = itemIdx === items.length - 1;

//   return (
//     <div>
//       <h1>Reader</h1>
//       <button disabled={isfirstItem} onClick={handleClickprev}>
//         Prev
//       </button>
//       <button disabled={lastItem} onClick={handleClick}>
//         Next
//       </button>
//       <p>
//         Progress {itemIdx + 1}/{items.length}
//       </p>
//       <article>
//         <h2>{currentArticle.title}</h2>
//         <p>{currentArticle.body}</p>
//       </article>
//     </div>
//   );
// }

import type { Article } from '../types/articles';

interface ArticlesProps {
  items: Article[];
}

export default function Articles({ items }: ArticlesProps) {
  return (
    <>
      {items.length > 0 && (
        <ul>
          {items.map(({ objectID, url, title }) => (
            <li key={objectID}>
              <a href={url} target="_blank">
                {title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

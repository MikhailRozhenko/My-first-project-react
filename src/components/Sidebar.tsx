import { useEffect } from 'react';
import css from './Sidebar.module.css';

interface SideBarProps {
  onClose: () => void;
}

export default function Sidebar({ onClose }: SideBarProps) {
  const handleBackDropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    console.log('addEventListener');
    document.addEventListener('keydown', handleKeydown);

    return () => {
      console.log('removeEventListener');
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  return (
    <div className={css.wrapper} onClick={handleBackDropClick}>
      <div className={css.sidebar}>
        <button onClick={onClose}>Close</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          voluptatum culpa modi? Quaerat repellat sit error officia dolore?
          Suscipit nisi aliquam voluptates accusamus repellat illo expedita
          necessitatibus laudantium animi quo?
        </p>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
<link rel="stylesheet" href="./cursor.css" />

export function Typewriter({ text, speed = 100, pause = 1500 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDelecting, setIsDelecting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDelecting){
        if (index < text.length){
          const nextChar = text.charAt(index)
          setDisplayedText((prev) => prev + nextChar);
          setIndex((prev) => prev + 1);
        } else{
          setTimeout(() => {
            setIsDelecting(true);
          }, pause);
        }
      } else{
        if (index > 0){
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        } else{
          setIsDelecting(false);
        }
      }
    }, isDelecting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [index, isDelecting, text, speed, pause]);

  return <span>{displayedText}<span className='cursor'>|</span></span>;
}

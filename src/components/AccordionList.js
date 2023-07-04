import { useState } from 'react';
import AccordionItem from './AccordingItem';

const ITEMS = [
  {
    title: 'Cheese',
    content: `is a food derived from milk that is produced in a wide range of flavors, textures, and forms by coagulation of the milk protein casein.`,
    readMoreLink: 'https://en.wikipedia.org/wiki/Cheese',
    svgTag: 'cheese',
  },
  {
    title: 'Lettuce',
    content: `is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds.`,
    readMoreLink: 'https://en.wikipedia.org/wiki/Lettuce',
    svgTag: 'lettuce',
  },
  {
    title: 'Tomato',
    content: `is the edible, often red, fruit of the plant Solanum lycopersicum, commonly known as a tomato plant.`,
    readMoreLink: 'https://en.wikipedia.org/wiki/Tomato',
    svgTag: 'tomatoes',
  },
  {
    title: 'Beef',
    content: `is the culinary name for meat from cattle, particularly skeletal muscle. Beef is a source of high-quality protein and essential nutrients.`,
    readMoreLink: 'https://en.wikipedia.org/wiki/Beef',
    svgTag: 'beef',
  },
];

export default function AccordionList() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className='accordion-container'>
      {ITEMS.map((item, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={item.title}
          content={item.content}
          link={item.readMoreLink}
          svgTag={item.svgTag}
          num={i}
          key={item.title}
        />
      ))}
    </div>
  );
}

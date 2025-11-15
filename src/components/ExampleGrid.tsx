import React from 'react';

interface ExampleGridProps {
    title: string;
    examples: { 
        name: string; 
        description: string; 
        video?: string;
        service?: string;
    }[];
}

const ExampleGrid: React.FC<ExampleGridProps> = ({ title, examples }) => {
  return (
    <div>
        // this will be a grid on mobile it will be vertically scrollable
        // on desktop it will be a 3XN grid depending on the # of example
        // that I have. 
      <h2>{title}</h2>
      <p>{examples.map(example => example.name).join(', ')}</p>
    </div>
  );
}

export default ExampleGrid;
import { useState } from 'react';
import { MultiSelect } from '@mantine/core';

const MultiInput = () => {
  const [data, setData] = useState([
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
  ]);

  return (
    <MultiSelect
      label="Creatable MultiSelect"
      data={data}
      placeholder="Select items"
      searchable
      creatable
      variant='unstyled'
      getCreateLabel={(query) => `+ Create ${query}`}
      onCreate={(query) => {
        const item = { value: query, label: query };
        setData((current) => [...current, item]);
        return item;
      }}
    />
  );
}

export default MultiInput;
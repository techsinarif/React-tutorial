import {
    useDeferredValue,
    useState,
  } from 'react';
  
  import LazyComp from './lazyComp';
  
  const Demo = () => {
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);
  
    return (
      <div>
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search...'
        />
        <LazyComp text={deferredQuery} />
      </div>
    );
  };
  
  export default Demo;
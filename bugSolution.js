```javascript
// app/page.js
import {useSearchParams} from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  //Simulate fetching data, always fetches correct data
  const data =  id ? {id: id, name: `Item ${id}`} : {id: null, name: 'No Item'};

  return (
    <div>
      <h1>{data.name}</h1>
      <p>ID: {data.id}</p>
    </div>
  );
}
```
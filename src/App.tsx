/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import axios from 'axios'
import { useEffect, useState } from 'react'

import { Item } from './components/item'
import { Lista } from './components/lista'

interface FetchDataProps {
  id: number
  title: string
  userId: number
}

function App() {
  const [items, setItems] = useState<FetchDataProps[]>([])

  const fetch = async () => {
    const response = await axios.get<FetchDataProps[]>(
      'https://jsonplaceholder.typicode.com/todos?_limit=6',
    )

    return response.data
  }

  useEffect(() => {
    fetch().then((data) => {
      setItems(data)
    })
  }, [])

  return (
    <>
      <Lista className="bg-black">
        {items.map((item) => (
          <Item key={item.id}>
            {item.title} / {item.userId}
          </Item>
        ))}
      </Lista>
    </>
  )
}

export default App

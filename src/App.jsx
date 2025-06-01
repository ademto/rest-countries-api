import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Header from '../components/Header'
import SearchFilterPanel from '../components/SearchFilterPanel'
import Card from '../components/Card'
import allData from "./data.json"

const ITEMS_PER_LOAD = 8;

function App() {
  const [items, setItems] = useState(allData.slice(0, ITEMS_PER_LOAD));
  const [hasMore, setHasMore] = useState(allData.length > ITEMS_PER_LOAD);
  const [nextIndex, setNextIndex] = useState(ITEMS_PER_LOAD);

  const fetchMoreData = () => {
    // simulate async delay
    setTimeout(() => {
      const newNextIndex = nextIndex + ITEMS_PER_LOAD;
      const nextItems = allData.slice(nextIndex, newNextIndex);

      setItems((prev) => [...prev, ...nextItems]);
      setNextIndex(newNextIndex);

      if (newNextIndex >= allData.length) {
        setHasMore(false);
      }
    }, 500);
  };

  return (
    <section className='bg-light-bg min-h-screen'>
      <Header />
      <div className="container mx-auto">
        <SearchFilterPanel />
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading more items...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen all {allData.length} items.</b>
            </p>
          }
        >
          <div className="grid grid-cols-4 gap-10">
            {items.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </section>
  )
}

export default App

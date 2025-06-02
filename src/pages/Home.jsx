import React from 'react';
import { useState } from 'react'
import { useSearchParams } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';
import allData from "../data.json"
import Filter from '../components/Filter'
import Search from '../components/Search'
import Card from '../components/Card'

const ITEMS_PER_LOAD = 8;

export default function Home() {
    const [items, setItems] = useState(allData.slice(0, ITEMS_PER_LOAD));
    const [hasMore, setHasMore] = useState(allData.length > ITEMS_PER_LOAD);
    const [nextIndex, setNextIndex] = useState(ITEMS_PER_LOAD);
    const [searchParams, setSearchParams] = useSearchParams();
    const regionFilter = searchParams.get("region");

    const displayRegion = regionFilter ? allData.filter(country => country.region.toLowerCase() === regionFilter) : allData;

    function filter(value) {
        setSearchParams({ region: value });
    }

    const fetchMoreData = () => {
        // simulate async delay
        setTimeout(() => {
        const newNextIndex = nextIndex + ITEMS_PER_LOAD;
        const nextItems = displayRegion.slice(nextIndex, newNextIndex);

        setItems((prev) => [...prev, ...nextItems]);
        setNextIndex(newNextIndex);

        if (newNextIndex >= displayRegion.length) {
            setHasMore(false);
        }
        }, 500);
    };
    return (
        <div className="container mx-auto px-5 xl:px-0">
            <div className="md:flex items-center justify-between my-10">
                <Search />
                <Filter filter={filter}/>
            </div>

            <InfiniteScroll
                dataLength={displayRegion.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Loading more items...</h4>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen all {allData.length} items.</b>
                    </p>
                }
            >

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {displayRegion.map((item, index) => (
                    <Card key={index} data={item} />
                    ))}
                </div>

            </InfiniteScroll>
        </div>
    )
}
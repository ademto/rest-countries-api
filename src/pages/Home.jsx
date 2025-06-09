import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';
import allData from "../data.json"
import Filter from '../components/Filter'
import Search from '../components/Search'
import Card from '../components/Card'

const ITEMS_PER_LOAD = 8;

export default function Home() {
    const [searchParams, setSearchParams] = useSearchParams();
    const regionFilter = searchParams.get("region") || "";
    const searchFilter = searchParams.get("search") || "";

    // Filtered data memoized for performance
    const displayData = useMemo(() => {
        let filtered = allData;

        if (searchFilter.trim()) {
            filtered = filtered.filter(country =>
                country.name.toLowerCase().includes(searchFilter.trim().toLowerCase())
            );
        }

        if (regionFilter) {
            filtered = filtered.filter(country =>
                country.region.toLowerCase() === regionFilter.toLowerCase()
            );
        }

        return filtered;
    }, [searchFilter, regionFilter]);

    // State for currently loaded items
    const [items, setItems] = useState(displayData.slice(0, ITEMS_PER_LOAD));
    const [hasMore, setHasMore] = useState(displayData.length > ITEMS_PER_LOAD);
    const [nextIndex, setNextIndex] = useState(ITEMS_PER_LOAD);

    // Reset items when filters change
    useEffect(() => {
        setItems(displayData.slice(0, ITEMS_PER_LOAD));
        setNextIndex(ITEMS_PER_LOAD);
        setHasMore(displayData.length > ITEMS_PER_LOAD);
    }, [displayData]);

    // Load more items on scroll
    const fetchMoreData = () => {
        setTimeout(() => {
            const newNextIndex = nextIndex + ITEMS_PER_LOAD;
            const nextItems = displayData.slice(nextIndex, newNextIndex);
            setItems(prevItems => [...prevItems, ...nextItems]);
            setNextIndex(newNextIndex);
            if (newNextIndex >= displayData.length) {
                setHasMore(false);
            }
        }, 500);
    };

    // Merge filters on region change
    function filter(value) {
        const params = Object.fromEntries(searchParams.entries());
        if (value) {
            params.region = value;
        } else {
            delete params.region;
        }
        setSearchParams(params);
    }

    return (
        <div className="container mx-auto px-5 xl:px-0">
            <div className="md:flex items-center justify-between my-10">
                <Search />
                <Filter filter={filter} />
            </div>

            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Loading more items...</h4>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen all {displayData.length} items.</b>
                    </p>
                }
            >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {items.map((item) => (
                        <Card key={item.name} data={item} />
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
}

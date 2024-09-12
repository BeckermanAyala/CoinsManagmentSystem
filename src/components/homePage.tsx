'use client';

import { useState } from 'react';
import CoinTable from './coinTable';

interface Coin {
    name: string;
    price: string;
    marketCap: string;
    link: string;
}

interface HomePageProps {
    coins: Coin[];
}

function HomePage({ coins }: HomePageProps) {
    const [search, setSearch] = useState<string>('');

    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search for a coin..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ marginBottom: '10px' }}
            />
            <CoinTable coins={filteredCoins} />
        </div>
    );
}

export default HomePage;

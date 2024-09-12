'use client';  // רכיב צד לקוח

import { useState } from 'react';
import CoinTable from './coinTable';

function HomePage({ coins  }) {
    const [search, setSearch] = useState('');

    const filterCoin = coins.filter(coin =>
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
            <CoinTable coins={filterCoin} />
        </div>
    );
}

export default HomePage;

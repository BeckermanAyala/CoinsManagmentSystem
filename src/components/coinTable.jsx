'use client';  // רכיב צד לקוח

import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';

function CoinTable({ coins = [] }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Market Cap</TableHead>
                    <TableHead>Link</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {coins.length === 0 ? (
                    <TableRow>
                        <TableCell colSpan="4">No data available</TableCell>
                    </TableRow>
                ) : (
                    coins.map((coin) => (
                        <TableRow key={coin.name}>
                            <TableCell>{coin.name}</TableCell>
                            <TableCell>{coin.price}</TableCell>
                            <TableCell>{coin.marketCap}</TableCell>
                            <TableCell>
                                <a href={coin.link}>View Link</a>
                            </TableCell>
                        </TableRow>
                    ))
                )}
            </TableBody>
        </Table>
    );
}

export default CoinTable;



import fs from 'fs';
import path from 'path';
import HomePage from '../../components/homePage';


export default async function Dashboard() {
     const filePath = path.join(process.cwd(), 'coins.json');
     let coins = [];
 
     try {
         const data = await fs.promises.readFile(filePath, 'utf8');
         coins = JSON.parse(data);
     } catch (error) {
         console.error("Error reading or parsing coins.json:", error);
         coins = []; 
     }
 
     if (!Array.isArray(coins)) {
         console.error("coins is not an array. Resetting coins to an empty array.");
         coins = [];  
     }
 
     return (
         <div>
             <h1>Welcome to the Crypto Monitoring System</h1>
             <HomePage coins={coins} />
         </div>
     );
 }
 

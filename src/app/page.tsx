'use client';

import { ReactElement } from 'react';
import Fab from './components/Fab';

export default function Home(): ReactElement {
    const buttons = [
        {
            label: '列印',
            onClick: () => console.log('列印 clicked'),
            className: 'bg-blue-500 text-white p-4 rounded-full shadow-md',
        },
        {
            label: 'i8n',
            onClick: () => console.log('i8n clicked'),
            className: 'bg-green-500 text-white p-4 rounded-full shadow-md',
        },
    ];

    return (
        <div className="relative min-h-screen">
            <Fab/>
        </div>
    );
}

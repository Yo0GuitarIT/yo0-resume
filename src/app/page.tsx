import React, { ReactElement } from 'react';

import Fab from './components/Fab';

export default function Home(): ReactElement {
    return (
        <div className="relative min-h-screen">
            <div className="m-4 mx-auto flex h-[297mm] w-[210mm] flex-col items-center justify-center border border-black">
                <h1>A4 Size Block</h1>
                <p>This is a vertical A4-sized block.</p>
            </div>
            <Fab />
        </div>
    );
}

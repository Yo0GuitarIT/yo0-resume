'use client';

import Fab from './components/Fab';
import TranslationComponent from './components/TranslationComponent';
import './i18n'; // 導入 i18n 配置

export default function Home() {
    return (
        <div className="relative min-h-screen">
            <div className="m-4 mx-auto flex h-[297mm] w-[210mm] flex-col items-center justify-center border border-black">
                <TranslationComponent />
            </div>
            <Fab />
        </div>
    );
}

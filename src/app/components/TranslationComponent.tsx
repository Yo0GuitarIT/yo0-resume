'use client';

import { useTranslation } from 'react-i18next';

const TranslationComponent = () => {
    const { t } = useTranslation();

    return (
        <div className="mb-4 flex flex-col items-center">
            <h1 className="mb-1 text-2xl font-bold">{t('name')}</h1>
            <p className="text-lg text-gray-600">{t('position')}</p>
        </div>
    );
};

export default TranslationComponent;

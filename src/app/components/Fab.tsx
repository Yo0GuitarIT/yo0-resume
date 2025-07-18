'use client';
import {
    XIcon,
    TranslateIcon,
    PrinterIcon,
    ListIcon,
} from '@phosphor-icons/react';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface FabProps {}

const Fab: FC<FabProps> = () => {
    const { i18n } = useTranslation();
    const [showButtons, setShowButtons] = useState<boolean[]>(
        Array(2).fill(false)
    );
    const isExpanded = showButtons.some((v) => v); // 更清楚的狀態判斷

    const toggleLanguage = () => {
        const currentLang = i18n.language;
        const newLang = currentLang === 'zh' ? 'en' : 'zh';
        i18n.changeLanguage(newLang);
        console.log(`Language changed to ${newLang}`);
    };

    const buttons = [
        {
            label: <PrinterIcon size={24} />,
            onClick: () => console.log('列印 clicked'),
            className: 'bg-blue-500 text-white p-4 rounded-full shadow-md',
        },
        {
            label: <TranslateIcon size={24} />,
            onClick: toggleLanguage,
            className: 'bg-green-500 text-white p-4 rounded-full shadow-md',
        },
    ];

    const toggleButtons = () => {
        if (!isExpanded) {
            // 展開：反向依序顯示
            buttons
                .slice()
                .reverse()
                .forEach((_, index) => {
                    setTimeout(() => {
                        setShowButtons((prev) => {
                            const newState = [...prev];
                            newState[buttons.length - 1 - index] = true;
                            return newState;
                        });
                    }, index * 150);
                });
        } else {
            // 收起：依序隱藏
            buttons.forEach((_, index) => {
                setTimeout(() => {
                    setShowButtons((prev) => {
                        const newState = [...prev];
                        newState[index] = false;
                        return newState;
                    });
                }, index * 150);
            });
        }
    };

    return (
        <div className="fixed right-8 bottom-8 flex flex-col items-end gap-4">
            {buttons.map((button, index) => (
                <button
                    key={index}
                    onClick={button.onClick}
                    className={`${button.className} transform transition-all duration-300 ${
                        showButtons[index]
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-8 opacity-0'
                    } delay-[${index * 150}ms]`}
                >
                    {button.label}
                </button>
            ))}

            <button
                onClick={toggleButtons}
                className={`transform rounded-full bg-red-500 p-4 text-white shadow-lg transition-transform duration-300 ${
                    isExpanded ? 'rotate-360' : 'rotate-0'
                }`}
            >
                {isExpanded ? <XIcon size={24} /> : <ListIcon size={24} />}
            </button>
        </div>
    );
};

export default Fab;

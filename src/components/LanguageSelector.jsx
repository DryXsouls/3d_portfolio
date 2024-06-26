import React from "react";
import {useTranslation} from "react-i18next";

const languages = [
    {code:"en", lang:"En"},
    {code:"sk", lang:"Sk"},
    ];

const LanguageSelector = () => {
    const{i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex bg-zinc-900 text-white gap-3">
            {languages.map((lng) => (
                <button
                    className={lng.code === i18n.language ? 'selected text-blue-600 p-1 border-2 rounded-md border-zinc-50' : ''}
                    key={lng.code}
                    onClick={() => changeLanguage(lng.code)}
                >
                    {lng.lang}
                </button>
            ))}
        </div>
    );
    };

export default LanguageSelector;
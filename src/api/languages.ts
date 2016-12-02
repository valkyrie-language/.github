type Language = {
    code: string;
    name: string;
}

type LanguageConfig = {
    defaultLanguage: string;
    languages: Language[];
}

export const LANGUAGE_CONFIG: LanguageConfig = {
    defaultLanguage: "en-US",
    languages: [
        {
            code: "en-US",
            name: "English"
        },
        {
            code: "zh-Hans",
            name: "简体中文",
        }
    ]
};

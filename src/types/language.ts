export interface Language {
    code: string
    name: string
    file: string
    icon?: string
}

export interface LanguageConfig {
    defaultLanguage: string
    languages: Language[]
}
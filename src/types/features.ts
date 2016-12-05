import AlgebraicDataType from "@/assets/icon/feature-lexical.svg";
import AlgebraicSubType from "@/assets/icon/feature-safety.svg";
import AlgebraicEffect from "@/assets/icon/feature-polymorphism.svg";

export type LanguageFeature = {
    icon: string
    titleKey: string
    descriptionKey: string
    learnMoreLink: string
}

export const LANGUAGE_FEATURES: LanguageFeature[] = [
    {
        icon: AlgebraicDataType,
        titleKey: 'features.algebraic-data-type.title',
        descriptionKey: 'features.algebraic-data-type.description',
        learnMoreLink: '/docs/algebraic-data-type'
    },
    {
        icon: AlgebraicSubType,
        titleKey: 'features.algebraic-subtype.title',
        descriptionKey: 'features.algebraic-subtype.description',
        learnMoreLink: '/docs/algebraic-subtype'
    },
    {
        icon: AlgebraicEffect,
        titleKey: 'features.algebraic-effect.title',
        descriptionKey: 'features.algebraic-effect.description',
        learnMoreLink: '/docs/algebraic-effect'
    }
]
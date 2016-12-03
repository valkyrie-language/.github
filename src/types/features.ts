import LexicalIcon from "@/assets/icon/feature-lexical.svg";
import SafetyIcon from "@/assets/icon/feature-safety.svg";
import PolymorphismIcon from "@/assets/icon/feature-polymorphism.svg";

export type LanguageFeature = {
    icon: string
    titleKey: string
    descriptionKey: string
    learnMoreLink: string
}

export const LANGUAGE_FEATURES: LanguageFeature[] = [
    {
        icon: LexicalIcon,
        titleKey: 'features.lexicalEffectHandlers.title',
        descriptionKey: 'features.lexicalEffectHandlers.description',
        learnMoreLink: '/docs/effect-handlers'
    },
    {
        icon: SafetyIcon,
        titleKey: 'features.effectSafety.title',
        descriptionKey: 'features.effectSafety.description',
        learnMoreLink: '/docs/effect-safety'
    },
    {
        icon: PolymorphismIcon,
        titleKey: 'features.lightweightPolymorphism.title',
        descriptionKey: 'features.lightweightPolymorphism.description',
        learnMoreLink: '/docs/polymorphism'
    }
]
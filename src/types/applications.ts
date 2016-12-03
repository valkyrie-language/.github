import CommandLineIcon from "@/assets/icon/application-command-line.svg";
import BackendIcon from "@/assets/icon/application-backend.svg";
import Frontend from "@/assets/icon/application-frontend.svg";
import GameIcon from "@/assets/icon/application-game.svg";
import EmbeddedIcon from "@/assets/icon/application-game.svg";
import DeepLearning from "@/assets/icon/application-deep-learning.svg";

type Application = {
    icon: string
    titleKey: string
    descriptionKey: string
    learnMoreLink: string
}

export const LANGUAGE_APPLICATIONS: Application[] = [
    {
        icon: CommandLineIcon,
        titleKey: 'applications.command-line.title',
        descriptionKey: 'applications.command-line.description',
        learnMoreLink: '/applications/command-line'
    },
    {
        icon: BackendIcon,
        titleKey: 'applications.server.title',
        descriptionKey: 'applications.server.description',
        learnMoreLink: '/applications/server'
    },
    {
        icon: Frontend,
        titleKey: 'applications.fullstack.title',
        descriptionKey: 'applications.fullstack.description',
        learnMoreLink: '/applications/fullstack'
    },
    {
        icon: GameIcon,
        titleKey: 'applications.game-development.title',
        descriptionKey: 'applications.game-development.description',
        learnMoreLink: '/applications/game-development'
    },
    {
        icon: DeepLearning,
        titleKey: 'applications.deep-learning.title',
        descriptionKey: 'applications.deep-learning.description',
        learnMoreLink: '/applications/deep-learning'
    },
    {
        icon: EmbeddedIcon,
        titleKey: 'applications.embedded.title',
        descriptionKey: 'applications.embedded.description',
        learnMoreLink: '/applications/embedded'
    }
]
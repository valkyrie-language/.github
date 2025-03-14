export interface Tool {
    name: string
    descriptionKey: string
    icon: string
    link: string
}

export interface InstallGuide {
    platform: string
    steps: string[]
    packageManagers?: string[]
}

export const LANGUAGE_TOOLS: Tool[] = [
    {
        name: 'VS Code',
        descriptionKey: 'tools.vsCode.description',
        icon: '/src/assets/icon/vscode.svg',
        link: 'https://marketplace.visualstudio.com/items?itemName=valkyrie.valkyrie-vscode'
    },
    {
        name: 'Vim/NeoVim',
        descriptionKey: 'tools.vim.description',
        icon: '/src/assets/icon/vim.svg',
        link: 'https://github.com/valkyrie-language/valkyrie-vim'
    },
    {
        name: 'RustRover',
        descriptionKey: 'tools.rustRover.description',
        icon: '/src/assets/icon/rustrover.svg',
        link: 'https://www.jetbrains.com/rust/'
    },
    {
        name: 'Helix',
        descriptionKey: 'tools.helix.description',
        icon: '/src/assets/icon/helix.svg',
        link: 'https://helix-editor.com/'
    },
    {
        name: 'Emacs',
        descriptionKey: 'tools.emacs.description',
        icon: '/src/assets/icon/emacs.svg',
        link: 'https://www.gnu.org/software/emacs/'
    },
    {
        name: 'Sublime Text',
        descriptionKey: 'tools.sublime.description',
        icon: '/src/assets/icon/sublime.svg',
        link: 'https://www.sublimetext.com/'
    },
    {
        name: 'Visual Studio',
        descriptionKey: 'tools.visualStudio.description',
        icon: '/src/assets/icon/visual-studio.svg',
        link: 'https://visualstudio.microsoft.com/'
    },
    {
        name: 'Eclipse',
        descriptionKey: 'tools.eclipse.description',
        icon: '/src/assets/icon/eclipse.svg',
        link: 'https://www.eclipse.org/'
    }
]

export const getInstallGuides: InstallGuide[] = [
    {
        platform: 'Windows',
        steps: [
            'download.installationGuide.downloadExecutable',
            'download.installationGuide.runInstaller',
            'download.installationGuide.followPrompts'
        ],
        packageManagers: [
            'choco install valkyrie'
        ]
    },
    {
        platform: 'macOS',
        steps: [
            'download.installationGuide.downloadPackage',
            'download.installationGuide.openPackage',
            'download.installationGuide.dragToApplications'
        ],
        packageManagers: [
            'brew install valkyrie'
        ]
    },
    {
        platform: 'Linux',
        steps: [
            'download.installationGuide.downloadArchive',
            'download.installationGuide.extractArchive',
            'download.installationGuide.addToPath'
        ],
        packageManagers: [
            'apt-get install valkyrie',
            'cargo install valkyrie'
        ]
    }
]
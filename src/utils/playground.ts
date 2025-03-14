/**
 * Open playground with optional code
 * @param code - The code to be loaded in playground
 */
export function openPlayground(code?: string) {
    const baseUrl = 'https://playground.valkyrie.org'
    if (code) {
        const encodedCode = encodeURIComponent(code)
        window.open(`${baseUrl}?code=${encodedCode}`, '_blank')
    } else {
        window.open(baseUrl, '_blank')
    }
}
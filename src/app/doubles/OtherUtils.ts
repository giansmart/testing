export type stringInfo = {
    lowerCase: string,
    upperCase: string,
    characters: string[],
    length: number,
    extraInfo: Object | undefined
}

export function calculateComplexity(info: stringInfo) {
    return Object.keys(info.extraInfo).length * info.length;
}
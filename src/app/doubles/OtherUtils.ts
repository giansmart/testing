import { v4 } from "uuid";

export type stringInfo = {
    lowerCase: string,
    upperCase: string,
    characters: string[],
    length: number,
    extraInfo: Object | undefined
}

type LoggerServiceCallBack = (arg: string) => void;

export function calculateComplexity(info: stringInfo) {
    return Object.keys(info.extraInfo).length * info.length;
}

export function toUpperCaseWithCallback(arg: string, callback: LoggerServiceCallBack) {
    if(!arg) {
        callback('Invalid argument!')
        return;
    }
    callback(`called function with ${arg}`);
    return arg.toUpperCase()
}

export function toUpperCase(arg: string) {
    return arg.toUpperCase();
}

export function toLowerCaseWidId(arg: string) {
    return arg.toLowerCase() + v4();
}

export class OtherStringUtils {
    public callExternalService() {
        console.log('Calling external service');
    }

    public toUpperCase(arg: string) {
        return arg.toUpperCase()
    }

    public logString(arg: string) {
        console.log(arg);
    }
}
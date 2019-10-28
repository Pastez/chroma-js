import { Animation } from "../Animation";
export declare class BcaAnimation extends Animation {
    private url;
    private blob?;
    private lastframe?;
    constructor(url: string | Blob);
    createFrames(): Promise<void>;
    private fromBlob;
    private parseAnimation;
}

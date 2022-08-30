
export interface Image  {
    path: string;
    width: number; // px
    height: number; // px
    averageColor: string; // hex with #
    size: number; // byte
    extension?: string;
    mimeType?: string;
}
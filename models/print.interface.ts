export type PrintType = 'ANIME' | 'GEEK' | 'EXCLUSIVA';

export interface Print {
    print_id: number;
    name: string;
    code: string;
    image_url: string;
    type: PrintType;
}
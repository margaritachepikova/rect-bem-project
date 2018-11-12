import { IClassNameProps } from '@bem-react/core';

export interface ICardProps {
    type: string;
    size: string;
    icon: string;
    title: string;
    source: string;
    time: string;
    description: string | null;
    data?: ICardData;
    hasImage?: boolean;
}

export interface ICardData extends IClassNameProps {
    type?: string;
    values?: object;
    temperature?: number;
    humidity?: number;
    albumcover?: string;
    artist?: string;
    track?: { name: string; length: string; };
    volume?: number;
    buttons?: string[];
    image?: string;
}

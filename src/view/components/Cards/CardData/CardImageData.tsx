import { cn } from '@bem-react/classname';
import { ModBody, withBemMod } from '@bem-react/core';
import * as React from 'react';
import '../Card.css'
import { ICardData } from '../CardInterfaces';

const cnCard = cn('Card');

const CardDataTypeImage: ModBody<ICardData> = ({}, { image }) => (
    <img className={ cnCard('Image') } src={image} />
);

export const CardImageData = withBemMod<ICardData>('Card', { type: 'image' }, CardDataTypeImage);

import { cn } from '@bem-react/classname';
import { ModBody, withBemMod } from '@bem-react/core';
import * as React from 'react';
import '../Card.css'
import { ICardData } from '../CardInterfaces';

const cnCard = cn('Card');

const CardDataTypeButtons: ModBody<ICardData> = ({}, { buttons }) => (
    <div>
        {!!buttons && buttons.map((button, index) =>
            <button key={index} type="button" className={cnCard('Button', {isPrimary: button === 'Да'})}>
                {button}
            </button>
        )}
    </div>
);

export const CardButtonsData = withBemMod<ICardData>('Card', { type: 'buttons' }, CardDataTypeButtons);

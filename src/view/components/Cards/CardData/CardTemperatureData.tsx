import { cn } from '@bem-react/classname';
import { ModBody, withBemMod } from '@bem-react/core';
import * as React from 'react';
import '../Card.css'
import { ICardData } from '../CardInterfaces';

const cnMeasurements = cn('Measurements');

const CardDataTypeTemperature: ModBody<ICardData> = ({}, { temperature, humidity }) => (
    <div className={cnMeasurements()}>
        <div className={cnMeasurements('Temperature')}>
            Температура:
            <span className={cnMeasurements('Text')}>{temperature}</span>
        </div>
        <div className={cnMeasurements('Humidity')}>
            Влажность:
            <span className={cnMeasurements('Text')}>{humidity}</span>
        </div>
    </div>
);

export const CardTemperatureData = withBemMod<ICardData>('Card', { type: 'temperature' }, CardDataTypeTemperature);

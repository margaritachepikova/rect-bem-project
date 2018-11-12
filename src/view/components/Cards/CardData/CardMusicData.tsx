import { cn } from '@bem-react/classname';
import { ModBody, withBemMod } from '@bem-react/core';
import * as React from 'react';
import '../Card.css'
import { ICardData } from '../CardInterfaces';

const cnCard = cn('Card');
const cnPlayer = cn('Player');
const albumCover = require('../images/albumCover.png');
const prevButton = require('../images/prevButton.svg');

const CardDataTypeMusic: ModBody<ICardData> = ({}, { artist, track, volume }) => (
    <div className={cnCard('Data')}>
        <div className={cnPlayer('Main')}>
        <img className={cnPlayer('Logo')} src={albumCover} />
            <div className={cnPlayer()}>
                <span>{!!track ? `${artist} - ${track.name}` : ''}</span>
                <div className={cnPlayer('SliderContainer')}>
                    <input type="range" min="1" max="100" className={cnPlayer('Slider')} />
                    <div>{!!track ? track.length : ''}</div>
                    </div>
                </div>
        </div>
        <div className={cnPlayer('Volume')}>
            <div className={cnPlayer('Controls')}>
                <div><img className={cnPlayer('PrevButton')} src={prevButton} /></div>
                <div><img className={cnPlayer('NextButton')} src={prevButton} /></div>
            </div>
            <input type="range" min="1" max="100" className={cnPlayer('VolumeSlider')} />
            <div className={cnPlayer('VolumeSliderValue')}>{volume}%</div>
        </div>
    </div>
);

export const CardMusicData = withBemMod<ICardData>('Card', { type: 'music' }, CardDataTypeMusic);

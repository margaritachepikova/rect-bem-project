import * as React from 'react';
import { cn } from '@bem-react/classname';
import { ICardData } from '../Cards/CardInterfaces';
import './Player.css'

const cnPlayer = cn('Player');
const prevButton = require('./prevButton.svg');

export const Player: React.SFC<ICardData> = ({ albumcover, track, artist, volume }) => (
    <div className={cnPlayer()}>
        <div className={cnPlayer('MainPanel')}>
            <img className={cnPlayer('AlbumCover')} src={albumcover} />
            <div className={cnPlayer('Display')}>
                <span>{!!track ? `${artist} - ${track.name}` : ''}</span>
                <div className={cnPlayer('TrackWrapper')}>
                    <input type="range" min="1" max="100" className={cnPlayer('Track')} />
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

import * as React from 'react';
import { ModBody, withBemMod } from '@bem-react/core';
import { Player } from '../../Player/Player';
import { ICardData } from '../CardInterfaces';
import '../Card.css';

const albumcover = require('../images/albumCover.png');

const CardDataTypeMusic: ModBody<ICardData> = ({}, { artist, track, volume }) => (
    <Player artist={artist} track={track} volume={volume} albumcover={albumcover}/>
);

export const CardMusicData = withBemMod<ICardData>('Card', { type: 'music' }, CardDataTypeMusic);

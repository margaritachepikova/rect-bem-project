import { compose } from '@bem-react/core';
import { CardDataBase as Base } from './CardDataBase';
import { CardButtonsData } from './CardButtonsData';
import { CardImageData } from './CardImageData';
import { CardTemperatureData } from './CardTemperatureData';
import { CardMusicData } from './CardMusicData';

export const CardData = compose(
    CardMusicData,
    CardImageData,
    CardButtonsData,
    CardTemperatureData
)(Base);

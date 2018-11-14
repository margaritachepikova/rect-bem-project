import * as React from 'react';
import { ICardProps } from './CardInterfaces';
import { CardData } from './CardData/CardData'
import { cn } from '@bem-react/classname';

import './Card.css';

export const cnCard = cn('Card');

export default class Card extends React.Component<ICardProps> {
    render() {
        const { size, type, hasImage, icon, title, source, time, description, data } = this.props;
        const image = require(`./images/${icon}${type === 'critical' ? '-white' : ''}.svg`);
        return <div className={cnCard({size, type, hasImage})}>
            <div className={cnCard('MainInfo')}>
                <div className={cnCard('TitleRow')}>
                    <img src={image} className={cnCard('Icon')} />
                    <div className={cnCard('Title')}>{title}</div>
                </div>
                <div className={cnCard('BasicInfo')}>
                    <div className={cnCard('Source')}>{source}</div>
                    <div>{time}</div>
                </div>
            </div>
            {!!description && <div className={cnCard('Description')}>{description}</div>}
            {!!data ?
                <div className={cnCard('Data')}>
                    <CardData
                        type={data.type}
                        values={data.values}
                        temperature={data.temperature}
                        humidity={data.humidity}
                        albumcover={data.albumcover}
                        artist={data.artist}
                        track={data.track}
                        volume={data.volume}
                        buttons={data.buttons}
                        image={data.image}
                    />
                </div> :
                undefined
            }
        </div>;
    }
}

import * as React from 'react';
import Card from './Card';
import { ICardProps } from './CardInterfaces';
import EventData from '../Events/EventsData';
import { cn } from '@bem-react/classname';

import './CardContainer.css';

export const cnCardContainer = cn('CardContainer');

const eventItems: ICardProps[] = EventData;
const graphImage = require('./images/graphImage.svg');
const cameraImage = require('./images/cameraImage.png');

eventItems.forEach(item => {
    if (item.icon === 'cam') {
        item.hasImage = true;
        item.data = {};
        item.data.image = cameraImage;
    }
    const data = item.data;
    if (data && data.type === 'graph') {
        item.hasImage = true;
        data.image = graphImage;
    }
    if (data) {
        if (data.temperature) {
            data.type = 'temperature';
        } else if (data.albumcover) {
            data.type = 'music';
        } else if (data.buttons) {
            data.type = 'buttons';
        } else if (data.image) {
            data.type = 'image';
        }
    }
});

export default class CardContainer extends React.Component {
    renderCards = (eventItems: ICardProps[]) => eventItems.map((item, index) => {
        return <Card
            key={index}
            icon={item.icon}
            type={item.type}
            title={item.title}
            size={item.size}
            source={item.source}
            time={item.time}
            description={item.description}
            data={item.data}
            hasImage={item.hasImage}
        />;
    });

    render() {
        return <div className={cnCardContainer()}>{this.renderCards(eventItems)}</div>;
    }
}

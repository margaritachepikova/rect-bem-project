import * as React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { cn } from '@bem-react/classname';

import './Header.css';

export const cnHeader = cn('Header');

const linkNames = ['События', 'Сводка', 'Устройства', 'Сценарии', 'Видеонаблюдение'];
const logo = require('./logo.png');

export class Header extends React.Component {
    render() {
        return <div className={cnHeader()}>
            <img className={cnHeader('Logo')} src={logo} />
            <input className={cnHeader('Button')} type="checkbox" id="Header-Button"/>
            <label className={cnHeader('Icon')} htmlFor="Header-Button" />
            <Navigation value={linkNames} />
        </div>;
    }
}

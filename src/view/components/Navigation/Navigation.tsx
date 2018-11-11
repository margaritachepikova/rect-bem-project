import * as React from 'react';
import { cn } from '@bem-react/classname';

import './Navigation.css';

export const cnNavigation = cn('Navigation');

interface INavigationProps {
    value: Array<string>;
}

export class Navigation extends React.Component<INavigationProps> {
    renderLinks = (linkNames: Array<string>) => linkNames.map((linkName, index) => {
        return <li key={index} className={cnNavigation('Link')}>
            <a href="#" className={cnNavigation('Item', { selected: !index })}>{linkName}</a>
        </li>;
    });

    render() {
        const { value } = this.props;
        return <ul className={cnNavigation()}>{this.renderLinks(value)}</ul>;
    }
}

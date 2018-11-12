import * as React from 'react';
import { cn } from '@bem-react/classname';

import './Navigation.css';

export const cnNavigation = cn('Navigation');

interface INavigationProps {
    items: string[];
    className?: string;
}

export class Navigation extends React.Component<INavigationProps> {
    renderLinks = (linkNames: Array<string>) => linkNames.map((linkName, index) => {
        return <li key={index} className={cnNavigation('Link')}>
            <a href="#" className={cnNavigation('Item')}>{linkName}</a>
        </li>;
    });

    render() {
        const { items, className } = this.props;
        return <ul className={cnNavigation(null, [className])}>{this.renderLinks(items)}</ul>;
    }
}

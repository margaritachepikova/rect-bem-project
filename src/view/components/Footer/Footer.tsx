import * as React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { cn } from '@bem-react/classname';

import './Footer.css';

export const cnFooter = cn('Footer');

const linkNames = ['Помощь', 'Обратная связь', 'Разработчикам', 'Условия использования', 'Авторские права'];

export default class Footer extends React.Component {
    render() {
        return <div className={cnFooter()}>
            <Navigation items={linkNames} />
            <div className={cnFooter('Copyright')}>© 2001–2017  ООО «Яндекс»</div>
        </div>;
    }
}

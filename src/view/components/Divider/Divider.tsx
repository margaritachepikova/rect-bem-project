import * as React from 'react';
import { cn } from '@bem-react/classname';

import './Divider.css';

export const cnDivider = cn('Divider');

export default class Divider extends React.Component {
    render() {
        return <div className={cnDivider()}>
        </div>;
    }
}

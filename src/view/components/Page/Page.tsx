import * as React from 'react';
import Header from '../Header/Header';
import Divider from '../Divider/Divider';
import CardContainer from '../Cards/CardContainer'
import Footer from '../Footer/Footer';
import { cn } from '@bem-react/classname';

import './Page.css';

export const cnPage = cn('Page');

export default class Page extends React.Component {
    render() {
        return <div className={cnPage()}>
            <Header />
            <Divider />
            <CardContainer />
            <Divider />
            <Footer />
        </div>;
    }
}

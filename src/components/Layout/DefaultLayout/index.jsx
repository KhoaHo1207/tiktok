import Header from '../components/Header';
import Sidebar from './Sidebar';
import GlobalStyles from '~/components/GlobalStyles';
import React from 'react';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;

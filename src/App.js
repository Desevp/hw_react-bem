import React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';
import './App.scss';
import Header from './Containers/Header';

const cnApp = cn('App');
const cnPage = cn('Page');
const cnFooter = cn('Footer');

const AppCommon = () => (
  <RegistryConsumer>
    {(registries) => {
      const registry = registries[cnApp()];
      const Footer = registry.get(cnFooter());

      return (
        <>
          <div className={cnPage()}>
            <div className={cnPage('Content')}>
              <Header />
              <main className={cnPage('Inner')}>
                <h1 className={cnPage('Title')}>
                  Лента событий
                </h1>
                <div className={cnPage('Grid')}>
                  1
                </div>
              </main>
            </div>
            <Footer className={cnPage('Footer')} />
          </div>
        </>
      );
    }}

  </RegistryConsumer>
);

export default AppCommon;

import React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';
import './App.scss';
import Header from './Containers/Header';

const cnApp = cn('App');
const cnPage = cn('Page');
const cnButton = cn('Button');

const AppCommon = () => (
  <RegistryConsumer>
    {(registries) => {
      const registry = registries[cnApp()];
      const Button = registry.get(cnButton());

      return (
        <>
          <div className={cnPage()}>
            <div className={cnPage('Content')}>
              <Header />
              {Button && <Button className="Simple" text="Просто" />}
            </div>
            <div className={cnPage('Footer')}>
              Футер
            </div>
          </div>
        </>
      );
    }}

  </RegistryConsumer>
);

export default AppCommon;

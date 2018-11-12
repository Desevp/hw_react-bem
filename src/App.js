import React from 'react';
import { cn, classnames } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';
import './App.scss';
import Header from './Containers/Header';
import Event from './Common/Components/Event';

import diagramPicture from './Common/assets/Richdata.svg';
import robotPicture from './Common/assets/image.jpg';

const cnApp = cn('App');
const cnPage = cn('Page');
const cnGrid = cn('Grid');
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
                <div className={classnames(cnPage('Grid'), cnGrid())}>
                  <Event
                    type="picture"
                    iconType="stats"
                    className={cnGrid('Item', { size: 'l' })}
                    titleEvent="Еженедельный отчет по расходам ресурсов"
                    titleDevice="Сенсоры потребления"
                    time="19:00, Сегодня"
                    description="Так держать! За последнюю неделю вы потратили на 10% меньше ресурсов, чем неделей ранее."
                    imageSrc={diagramPicture}
                    imageAlt="diagram"
                  />
                  <Event
                    className={cnGrid('Item', { size: 's' })}
                    iconType="key"
                    titleEvent="Дверь открыта"
                    titleDevice="Сенсор входной двери"
                    time="18:50, Сегодня"
                  />
                  <Event
                    className={cnGrid('Item', { size: 's' })}
                    iconType="robot"
                    titleEvent="Уборка закончена"
                    titleDevice="Пылесос"
                    time="18:45, Сегодня"
                  />
                  <Event
                    className={cnGrid('Item', { size: 's' })}
                    iconType="router"
                    titleEvent="Новый пользователь"
                    titleDevice="Роутер"
                    time="18:45, Сегодня"
                  />
                  <Event
                    type="indicators"
                    iconType="thermal"
                    className={cnGrid('Item', { size: 'm' })}
                    titleEvent="Изменен климатический режим"
                    titleDevice="Сенсор микроклимата"
                    time="18:30, Сегодня"
                    description="Установлен климатический режим «Фиджи»"
                    temperatureValue="24"
                    humidityValue="80"
                  />
                  <Event
                    mode="critical"
                    iconType="ac"
                    className={cnGrid('Item', { size: 'm' })}
                    titleEvent="Невозможно включить кондиционер"
                    titleDevice="Кондиционер"
                    time="18:21, Сегодня"
                    description="В комнате открыто окно, закройте его и повторите попытку»"
                  />
                  <Event
                    type="music"
                    iconType="music"
                    className={cnGrid('Item', { size: 'm' })}
                    titleEvent="Музыка включена"
                    titleDevice="Яндекс.Станция"
                    time="18:16, Сегодня"
                    albumcover="https://avatars.yandex.net/get-music-content/193823/1820a43e.a.5517056-1/m1000x1000"
                    artist="Florence & The Machine"
                    trackName="Big God"
                    trackLenght="4:31"
                    volume="80"
                  />
                  <Event
                    type="alert"
                    iconType="fridge"
                    className={cnGrid('Item', { size: 'm' })}
                    titleEvent="Заканчивается молоко"
                    titleDevice="Холодильник"
                    time="17:23, Сегодня"
                    description="Кажется, в холодильнике заканчивается молоко. Вы хотите добавить его в список покупок?"
                  />
                  <Event
                    className={cnGrid('Item', { size: 's' })}
                    iconType="battery"
                    titleEvent="Зарядка завершена"
                    titleDevice="Оконный сенсори"
                    time="16:22, Сегодня"
                    description="Ура! Устройство «Оконный сенсор» снова в строю!"
                  />
                  <Event
                    mode="critical"
                    type="picture"
                    iconType="camera"
                    className={cnGrid('Item', { size: 'l' })}
                    titleEvent="Пылесос застрял"
                    titleDevice="Сенсор движения"
                    time="16:17, Сегодня"
                    description="Робопылесос не смог сменить свое местоположение в течение последних 3 минут. Похоже, ему нужна помощь."
                    imageSrc={robotPicture}
                    imageAlt="photo"
                  />
                  <Event
                    className={cnGrid('Item', { size: 's' })}
                    iconType="kettle"
                    titleEvent="Вода вскипела"
                    titleDevice="Чайник"
                    time="16:20, Сегодня"
                  />
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

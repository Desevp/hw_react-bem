import React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';
import './App.css';
import Header from './Containers/Header';

const cnApp = cn('App');
const cnButton = cn('Button');

const AppCommon = () => (
  <RegistryConsumer>
    {(registries) => {
      const registry = registries[cnApp()];
      const Button = registry.get(cnButton());

      return (
        <>
          <Header />
          {Button && <Button className="Simple" text="Просто" />}
        </>
      );
    }}

  </RegistryConsumer>
);

export default AppCommon;

//
//
// import Header from './Containers/Header';
//
//
//
//
// const App = () => (
//   <div className="App">
//     <Header />
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       { console.log('sdf')}
//       <p>
//         Edit
//         <code>src/App.js</code>
//         and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );
//
//
// export default App;

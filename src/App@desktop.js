import { cn } from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import AppCommon from './App';
import Footer from './Containers/Footer';

const cnApp = cn('App');
const cnFooter = cn('Footer');

const registry = new Registry({ id: cnApp() });

registry.set(cnFooter(), Footer);

const App = withRegistry(registry)(AppCommon);

export default App;

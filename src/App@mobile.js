import { cn } from '@bem-react/classname';
import { Registry, withRegistry } from '@bem-react/di';
import AppCommon from './App';
import Button from './Common/Components/Button/Button';

const cnApp = cn('App');
const cnButton = cn('Button');

const registry = new Registry({ id: cnApp() });

registry.set(cnButton(), Button(null));

const App = withRegistry(registry)(AppCommon);

export default App;
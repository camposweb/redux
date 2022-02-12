import { Provider } from 'react-redux';
import store from './store';
import { Catalog } from './components/Catalog';
import { Container } from '@mui/material';
import { AppRoutes } from './routes';

function App() {

  return (
    <Provider store={store}>
      <Container>
        <Catalog />
        <AppRoutes />
      </Container>
    </Provider>
  )
}

export default App

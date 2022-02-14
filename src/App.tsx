import { Provider } from 'react-redux';
import store from './store';
import { Catalog } from './components/Catalog';
import { Container } from '@mui/material';
import { Cart } from './components/Cart';


function App() {

  return (
    <Provider store={store}>
      <Container>
        <Catalog />
        <Cart />
      </Container>
    </Provider>
  )
}

export default App

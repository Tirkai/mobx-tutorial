import React from 'react';
import { Provider } from 'mobx-react'
import store from '../../stores/RootStore'
import AppContainer from '../AppContainer/AppContainer';
import './App.css'
import 'antd/dist/antd.css'
const App: React.FC = () => {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );
}

export default App;

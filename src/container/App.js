import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config'
// import { BrowserRouter as Router } from 'react-router-dom';
import routes from '../routes';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import configureStore from '../core/configureStore'

const history = createBrowserHistory()
const store = configureStore;
window.store = store;
// import './App.module.scss';

class App extends Component {
    render () {
        return (
            <LocaleProvider locale={zhCN}>
                <Provider store={store}>
                    <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
                        <> { /* your usual react-router v4 routing */ }
                            {renderRoutes(routes)}
                        </>
                    </ConnectedRouter>
                </Provider>
            </LocaleProvider>
        )
    }
}

export default App;

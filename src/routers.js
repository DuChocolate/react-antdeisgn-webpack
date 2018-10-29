
import React from 'react';
import {BrowserRouter as Router, Route, browserHistory as history} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore();
import Layout from './MainLayout';
import Welcome from './components/Index';
import Buttons from './routes/Button';
import Icons from './routes/Icons';
import Affixs from './routes/Affixs';
import Breadcrumbs from './routes/Breadcrumbs';
import DropDowns from './routes/DropDowns';
import Menus from './routes/Menus';
import Paginations from './routes/Paginations';
import StepsBar from './routes/StepsBar';
import UploadImags from './routes/UploadImags';
import DragDrop from './routes/DragDrop';
import Hello from './components/Hello';

class Root extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Layout>
                        <Route exact path='/' component={Welcome}/>
                        <Route exact path='/app/ui/buttons' component={Buttons}/>
                        <Route path='/app/ui/icons' component={Icons}/>
                        <Route path='/app/ui/affixs' component={Affixs}/>
                        <Route path='/app/ui/breadcrumbs' component={Breadcrumbs}/>
                        <Route path='/app/ui/dropDowns' component={DropDowns}/>
                        <Route path='/app/ui/menus' component={Menus}/>
                        <Route path='/app/ui/paginations' component={Paginations}/>
                        <Route path='/app/ui/stepsBar' component={StepsBar}/>
                        <Route path='/app/imag/uploadImags' component={UploadImags}/>
                        <Route path='/app/imag/dragDrop' component={DragDrop}/>
                        <Route path='/hello' component={Hello}/>
                    </Layout>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app';
import {store} from "./src/store";
import Provider from "react-redux/es/components/Provider";


ReactDOM.render(<Provider store={store}><App /></Provider>  ,document.getElementById('app'));
import React from 'react'
import ReactDOM from 'react-dom'
import { header } from './header'
import { compromise } from './compromise'

ReactDOM.render(header(), document.getElementById('header'));
ReactDOM.render(compromise(), document.getElementById('compromise'));

import React from 'react'
import ReactDOM from 'react-dom'
import { header } from './header'
import { first_chapter } from './first_chapter'

ReactDOM.render(header(), document.getElementById('header'));
ReactDOM.render(first_chapter(), document.getElementById('first_chapter'));

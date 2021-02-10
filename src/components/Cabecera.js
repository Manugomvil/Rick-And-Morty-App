import React, { Fragment } from 'react'
import { useLocation } from 'react-router-dom';
import Titulo from '../components/Title';

const Cabecera = () =>(
        <Fragment>
            <Titulo name={useLocation().pathname.substring(1)}/>
        </Fragment>
        )
export default Cabecera
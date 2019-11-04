import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import sprite from '../assets/icons/sprite.svg';

class Pagamento extends Component {

    renderButtons = () => {
        const buttons = [
            { name: "Gestão e Comprovantes" },
            { name: "Transferir" },
            { name: "Boletos DDA" },
            { name: "Pagamentos Recusados" },
            { name: "Gestão de Favorecidos" },
        ].map(e => {
            return (
                <div className="Pagamento__option">
                    <p className="paragraph-2">{e.name}</p>
                    <button className="App__button App__button--2 Pagamento__option-button">acessar</button>
                </div>
            );
        })

        return buttons;
    }

    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <div className="notification__box-title">
                        <Link to="/">
                            <svg className="App__notification App__notification--5" >
                                <use xlinkHref={`${sprite}#icon-circle-left`}></use>
                            </svg>
                        </Link>
                        <h1 className="header-1">Pagar e Transferir</h1>
                        &emsp;
                    </div>
                </div>

                <div className="Pagamento">
                    {this.renderButtons()}
                    <button className="App__button App__button--2 App__button--5">
                        Pagamento com código de barras
                        <svg className="App__notification App__notification--3">
                            <use xlinkHref={`${sprite}#icon-barcode`}></use>
                        </svg>
                    </button>
                </div>
            </React.Fragment>
        );
    }
}

export default Pagamento;
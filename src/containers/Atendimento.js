import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import sprite from '../assets/icons/sprite.svg';

class Atendimento extends Component {

    renderButtons = () => {

        const buttons = [
            {name: "Meu Acesso", icon: "icon-key"},
            {name: "Minha Conta", icon: "icon-newspaper"},
            {name: "Minhas Condições", icon: "icon-pencil"},
            {name: "Meu Cartão", icon: "icon-credit-card"},
            {name: "Vincular Cartão", icon: "icon-upload2"},
            {name: "Pagamentos", icon: "icon-coin-dollar"},
            {name: "Cobrança", icon: "icon-coin-dollar"},
            {name: "Minhas Vendas SafraPay", icon: "icon-barcode"},
            {name: "Segurança", icon: "icon-lock"},
            {name: "Canais de Atendimento", icon: "icon-bubble2"},
            {name: "Falar com um Especialista", icon: "icon-headphones"},
        ].map(e => {
            return (
                <button className="App__button App__button--4">
                    <svg className="App__notification App__notification--3">
                        <use xlinkHref={`${sprite}#${e.icon}`}></use>
                    </svg>
                    <p className="paragraph-3">{e.name}</p>
                    <svg className="App__notification App__notification--3">
                        <use xlinkHref={`${sprite}#icon-circle-right`}></use>
                    </svg>
                </button>
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
                        <h1 className="header-1">Atendimento</h1>
                        &emsp;
                    </div>
                </div>

                {/*this need editing later*/}
                <div className="App__search App__search--2">
                    <input className="App__search-input App__search-input--2" type="text" placeholder="Encontre ajuda usando palavras-chave" />
                    <svg className="App__notification App__notification--2 App__notification--5">
                        <use xlinkHref={`${sprite}#icon-search`}></use>
                    </svg>
                </div>

                {/*buttons list */}
                <div className="App__menu--vertical">
                    {this.renderButtons()}
                </div>
            </React.Fragment>
        );
    }
}

export default Atendimento;
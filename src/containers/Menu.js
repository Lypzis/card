import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import sprite from '../assets/icons/sprite.svg';

class Menu extends Component {

    renderButtons = () => {

        const buttons = [
            { name: "Conta Corrente", icon: "icon-key" },
            { name: "Pagar e Transferir", icon: "icon-loop2" },
            { name: "Recebimentos", icon: "icon-coin-dollar" },
            { name: "SafraPay", icon: "icon-newspaper" },
            { name: "Segurança", icon: "icon-shield" },
            { name: "Cartão de Débito", icon: "icon-credit-card" },
            { name: "Minha Conta", icon: "icon-cog" },
            { name: "Sair", icon: "icon-exit" },
        ].map(e => {
            return (
                <button className="App__button App__button--6">
                    <svg className="App__notification App__notification--3">
                        <use xlinkHref={`${sprite}#${e.icon}`}></use>
                    </svg>
                    <p className="paragraph-3">{e.name}</p>
                </button>
            );
        })

        return buttons;
    }

    render() {
        return (
            <div className="Menu">
                <div className="App">
                    <div className="notification__box-title">
                        <Link to="/">
                            <svg className="App__notification App__notification--5" >
                                <use xlinkHref={`${sprite}#icon-circle-left`}></use>
                            </svg>
                        </Link>
                        <h1 className="header-1">Menu</h1>
                        &emsp;
                    </div>
                </div>
                <div className="Menu__box">
                    {this.renderButtons()}
                </div>
            </div>
        );
    }
}

export default Menu;
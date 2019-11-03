import React, { Component } from 'react';
import './App.css';

import sprite from './icons/sprite.svg';

import logotemp from './logotemp.jpeg';
import safrapay from './images/safrapay.png';

class App extends Component {

  state = {
    current: null,
    balanceShow: true,
    balanceShowDetails: false,
    loaded: false
  }

  componentDidMount() {
    this.onClickBackHome();
  }

  onClickBackHome = () => {
    this.setState({
      current:
        <div className="App home">
          <section className="App__header">
            <div className="App__message">
              &emsp;
            <p className="paragraph-1">Toque no cartão para pagar com QR Code</p>
              <a href="#" onClick={this.onClickNotification}>
                <svg className="App__notification" >
                  <use xlinkHref={`${sprite}#icon-bell`}></use>
                </svg>
              </a>
            </div>

            <div className="App__card">
              <img className="App__logo" src={logotemp} alt="" /> {/*qrcode logo here*/}
              <img className="App__logo App__logo--2" src={safrapay} alt="Safrapay Logo" /> {/*company logo here*/}
              <div className="App__card-owner">
                <p className="paragraph-2">Banco: 422</p>
                <p className="paragraph-2">AG: 0097</p>
                <p className="paragraph-2">C/C: 819928-6</p>
                <p className="paragraph-2 sm-margin">Fernando Bento da Silva Neto</p>
              </div>
            </div>

            <div className="App__message--2">
              <p className="paragraph-1">Saldo disponível + limites</p>

              <div className="App__show-money">
                <p id="balance" className="App__money">R$0,45</p>
                <a href="#" onClick={this.onEyeClick}>
                  {
                    this.state.balanceShow ?
                      <svg id="eye" className="App__notification">
                        <use xlinkHref={`${sprite}#icon-eye-blocked`}></use>
                      </svg> :
                      <svg id="eye" className="App__notification">
                        <use xlinkHref={`${sprite}#icon-eye`}></use>
                      </svg>
                  }
                </a>
              </div>

              {
                this.state.balanceShowDetails ?
                  <React.Fragment>
                    <a href="#" onClick={this.showBalanceDetails}>
                      <svg className="App__notification">
                        <use xlinkHref={`${sprite}#icon-circle-up`}></use>
                      </svg>
                    </a>
                    <div className="App__balance-details">
                      <ul className="App__balance-details-list">
                        <li className="App__balance-details-list-item">
                          <p className="paragraph-1">Saldo em conta</p>
                          <p id="balance" className="App__money">R$0,45</p>
                        </li>
                        <li className="App__balance-details-list-item">
                          <p className="paragraph-1">Saldo em conta + Cheque Empreendedor</p>
                          <p id="balance" className="App__money">R$0,45</p>
                        </li>
                        <li className="App__balance-details-list-item">
                          <p className="paragraph-1">Saldo total disponível</p>
                          <p id="balance" className="App__money">R$0,45</p>
                        </li>
                      </ul>
                      <div className="App__balance-details-buttons">
                        <button className="App__button App__button--2 App__button--3">Extrato</button>
                        <button className="App__button App__button--2 App__button--3">Pacote de serviços</button>
                      </div>
                    </div>
                  </React.Fragment> :
                  <a href="#" onClick={this.showBalanceDetails}>
                    <svg className="App__notification">
                      <use xlinkHref={`${sprite}#icon-circle-down`}></use>
                    </svg>
                  </a>
              }
            </div>


          </section>

          <section className="App__body">

            <div className="App__search">
              <input className="App__search-input" type="text" placeholder="Como podemos te ajudar?"/>
              <svg className="App__notification App__notification--2">
                <use xlinkHref={`${sprite}#icon-search`}></use>
              </svg>
            </div>

            <div className="App__menu"> {/*reusable??? */}
              <button className="App__button button-1">
                <svg className="App__notification App__notification--3">
                  <use xlinkHref={`${sprite}#icon-loop2`}></use>
                </svg>
                <p className="paragraph-3">Transferir</p>
              </button>

              <button className="App__button button-1">
                <svg className="App__notification App__notification--3">
                  <use xlinkHref={`${sprite}#icon-address-book`}></use>
                </svg>
                <p className="paragraph-3">Contato</p>
              </button>

              <button className="App__button button-1">
                <svg className="App__notification App__notification--3">
                  <use xlinkHref={`${sprite}#icon-coin-dollar`}></use>
                </svg>
                <p className="paragraph-3">Pagar</p>
              </button>

              <button className="App__button button-1">
                <svg className="App__notification App__notification--3">
                  <use xlinkHref={`${sprite}#icon-credit-card`}></use>
                </svg>
                <p className="paragraph-3">Cartão de Crédito</p>
              </button>

              <button className="App__button button-1">
                <svg className="App__notification App__notification--3">
                  <use xlinkHref={`${sprite}#icon-coin-dollar`}></use>
                </svg>
                <p className="paragraph-3">Saque</p>
              </button>

              <button className="App__button button-1">
                <svg className="App__notification App__notification--3">
                  <use xlinkHref={`${sprite}#icon-newspaper`}></use>
                </svg>
                <p className="paragraph-3">SafraPay</p>
              </button>

              <button className="App__button button-1">
                <svg className="App__notification App__notification--3">
                  <use xlinkHref={`${sprite}#icon-credit-card`}></use>
                </svg>
                <p className="paragraph-3">Vender com Cartão</p>
              </button>

              <button className="App__button button-1">
                <svg className="App__notification App__notification--3">
                  <use xlinkHref={`${sprite}#icon-new-tab`}></use>
                </svg>
                <p className="paragraph-3">Cobrar com Link</p>
              </button>

              <button className="App__button button-1">
                <svg className="App__notification App__notification--3">
                  <use xlinkHref={`${sprite}#icon-envelop`}></use>
                </svg>
                <p className="paragraph-3">Trazer seu Salário</p>
              </button>

              <button className="App__button button-1">
                <svg className="App__notification App__notification--3">
                  <use xlinkHref={`${sprite}#icon-barcode`}></use>
                </svg>
                <p className="paragraph-3">Cobrança</p>
              </button>

              <button className="App__button button-1">
                <svg className="App__notification App__notification--3">
                  <use xlinkHref={`${sprite}#icon-search`}></use>
                </svg>
                <p className="paragraph-3">Ver mais</p> {/*this opens another menu*/}
              </button>
            </div>

            <div className="App__advertisement">
              <img src="" alt="" />
              <img src="" alt="" />
            </div>

            <div className="App__launch">
              <h2 className="header-2">Últimos Lançamentos</h2>
              <ul className="App__launch-list">

                <li className="App__launch-list-item"> {/*this is dynamic too*/}
                  <div className="App__launch-list-item-action">
                    <p className="paragraph-3">DÉBITO SEGURO</p>
                    <p className="paragraph-4">30/out</p>
                  </div>
                  <p className="App__money App__money--2">-R$9,90</p>
                </li>

                <li className="App__launch-list-item"> {/*this is dynamic too*/}
                  <div className="App__launch-list-item-action">
                    <p className="paragraph-3">MASTER ANTECIPACAO</p>
                    <p className="paragraph-4">28/out</p>
                  </div>
                  <p className="App__money App__money--3">R$10,35</p>
                </li>

              </ul>

              <button className="App__button App__button--2">Ver extrato</button>
            </div>
          </section>

          <nav className="App__navigation">
            <button className="App__button button-1 App__navigation-button">
              <svg className="App__notification App__notification--3 App__notification--4">
                <use xlinkHref={`${sprite}#icon-home3`}></use>
              </svg>
              <p className="paragraph-3">Início</p>
            </button>
            <button className="App__button button-1 App__navigation-button">
              <svg className="App__notification App__notification--3 App__notification--4">
                <use xlinkHref={`${sprite}#icon-coin-dollar`}></use>
              </svg>
              <p className="paragraph-3">Pagamento</p>
            </button>
            <button className="App__button button-1 App__navigation-button">
              <svg className="App__notification App__notification--3 App__notification--4">
                <use xlinkHref={`${sprite}#icon-newspaper`}></use>
              </svg>
              <p className="paragraph-3">SafraPay</p>
            </button>
            <button className="App__button button-1 App__navigation-button">
              <svg className="App__notification App__notification--3 App__notification--4">
                <use xlinkHref={`${sprite}#icon-headphones`}></use>
              </svg>
              <p className="paragraph-3">Atendimento</p>
            </button>
            <button className="App__button button-1 App__navigation-button">
              <svg className="App__notification App__notification--3 App__notification--4">
                <use xlinkHref={`${sprite}#icon-search`}></use>
              </svg>
              <p className="paragraph-3">Ver mais</p>
            </button>
          </nav>
        </div>
    });

  }

  onClickNotification = () => {
    console.log('clicked');

    this.setState({
      current: (
        <div className="App notifications">
          <div className="notification__box-title">
            <a href="#" onClick={this.onClickBackHome}>
              <svg className="App__notification App__notification--5" >
                <use xlinkHref={`${sprite}#icon-circle-left`}></use>
              </svg>
            </a>
            <h1 className="header-1">Notificações</h1>
            &emsp;
          </div>
          <div className="date-box">02/11/2019</div>
          <ul>
            <li className="notification__box"> {/*possibly dinamic*/}
              <div>
                <div className="notification__box-header">
                  <span className="blue__dot">&emsp;</span>
                  <h2 className="header-2 black">Bem Vindo ao SafraPay digital</h2>
                </div>
                <p className="paragraph-3">Conheça as novas funcionalidades do seu app</p>
              </div>
              <svg className="App__notification App__notification--2 App__notification--5">
                <use xlinkHref={`${sprite}#icon-circle-right`}></use>
              </svg>
            </li>
          </ul>


          <nav className="App__navigation">
            <button className="App__button button-1 App__navigation-button">
              <svg className="App__notification App__notification--3 App__notification--4">
                <use xlinkHref={`${sprite}#icon-home3`}></use>
              </svg>
              <p className="paragraph-3">Início</p>
            </button>
            <button className="App__button button-1 App__navigation-button">
              <svg className="App__notification App__notification--3 App__notification--4">
                <use xlinkHref={`${sprite}#icon-coin-dollar`}></use>
              </svg>
              <p className="paragraph-3">Pagamento</p>
            </button>
            <button className="App__button button-1 App__navigation-button">
              <svg className="App__notification App__notification--3 App__notification--4">
                <use xlinkHref={`${sprite}#icon-newspaper`}></use>
              </svg>
              <p className="paragraph-3">SafraPay</p>
            </button>
            <button className="App__button button-1 App__navigation-button">
              <svg className="App__notification App__notification--3 App__notification--4">
                <use xlinkHref={`${sprite}#icon-headphones`}></use>
              </svg>
              <p className="paragraph-3">Atendimento</p>
            </button>
            <button className="App__button button-1 App__navigation-button">
              <svg className="App__notification App__notification--3 App__notification--4">
                <use xlinkHref={`${sprite}#icon-search`}></use>
              </svg>
              <p className="paragraph-3">Ver mais</p>
            </button>
          </nav>
        </div>
      )
    });
  }

  showBalanceDetails = () => {
    if(this.state.balanceShowDetails)
      this.setState({
        balanceShowDetails: false
      });
    else if(!this.state.balanceShowDetails)
      this.setState({
        balanceShowDetails: true
      });

    this.onClickBackHome();
  }

  onEyeClick = () => {
    const balance = document.getElementById('balance');

    if (this.state.balanceShow) {
      balance.style.display = 'block';
      this.setState({
        balanceShow: false
      });
    }

    else if (!this.state.balanceShow) {
      balance.style.display = 'none';
      this.setState({
        balanceShow: true
      });
    }

    this.onClickBackHome();
  }



  render() {
    if (document.getElementById('balance') && !this.state.loaded) {
      this.onEyeClick();
      this.setState({
        loaded: true
      });
    }

    if(!this.state.loaded) {
      this.showBalanceDetails();
      this.setState({
        loaded: true
      });
    }

    return (
      <React.Fragment>
        {this.state.current}
      </React.Fragment>
    );
  }

}

export default App;

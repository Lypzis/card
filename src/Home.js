import React, { Component } from 'react';
import './App.css';

import sprite from './assets/icons/sprite.svg';
import safrapay from './assets/images/safrapay.png';

class Home extends Component {

  state = {
    current: null,
    balanceShow: true,
    balanceShowDetails: false,
    loaded: false,
    total: 500.00,
    cheque: 0.00,
    totalForDisplay: 500.00,
    history: [
      <li key="01" className="App__launch-list-item"> {/*this is dynamic too*/}
        <div className="App__launch-list-item-action">
          <p className="paragraph-3">DÉBITO SEGURO</p>
          <p className="paragraph-4">30 de out de 2019</p>
        </div>
        <p className="App__money App__money--2">-R$9,90</p>
      </li>,

      <li key="02" className="App__launch-list-item"> {/*this is dynamic too*/}
        <div className="App__launch-list-item-action">
          <p className="paragraph-3">MASTER ANTECIPACAO</p>
          <p className="paragraph-4">28 de out de 2019</p>
        </div>
        <p className="App__money App__money--3">R$10,35</p>
      </li>
    ]
  }

  componentDidMount() {
    this.onClickBackHome();
  }

  componentWillUnmount(){
    //Stop regressive timer
  }

  onClickBackHome = () => {
    this.setState({
      current:
        <React.Fragment>
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
                &emsp;
              {/*<img className="App__logo" src={qrcode} alt="Pagar com QR code" /> qrcode logo here*/}
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
                  <p id="balance" className="App__money">R${this.state.totalForDisplay}</p>
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
                            <p id="balance" className="App__money">R${this.state.totalForDisplay}</p>
                          </li>
                          <li className="App__balance-details-list-item">
                            <p className="paragraph-1">Saldo em conta + Cheque Empreendedor</p>
                            <p id="balance" className="App__money">R${this.state.totalForDisplay}</p>
                          </li>
                          <li className="App__balance-details-list-item">
                            <p className="paragraph-1">Saldo total disponível</p>
                            <p id="balance" className="App__money">R${this.state.totalForDisplay}</p>
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
                <input className="App__search-input" type="text" placeholder="Como podemos te ajudar?" />
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

                  {this.state.history}

                </ul>

                <button className="App__button App__button--2">Ver extrato</button>
              </div>
            </section>


          </div>
           </React.Fragment>
    });

  }

  onClickNotification = () => {

    this.setState({
      current: (
        <React.Fragment>
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

          </div>
        </React.Fragment>
      )
    });
  }

  showBalanceDetails = () => {
    if (this.state.balanceShowDetails)
      this.setState({
        balanceShowDetails: false
      });
    else if (!this.state.balanceShowDetails)
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

  localDate = () => {
    const date = new Date()
    const options = { year: 'numeric', month: 'short', day: 'numeric' };

    return date.toLocaleDateString('pt-BR', options);
  }

  numberWithCommas = (x) => {

    const number = parseFloat(x).toFixed(2).split('.');
    number[0] = number[0].split(/(?=(?:...)*$)/).join('.');
    return number.join(',');

    // first case won't return 10,50, and will instead return 10,5
    //return parseFloat(x).toLocaleString('pt-BR') //'pt-BR' x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  addBalance = () => {
    let value = Math.random() * (100 - 30) + 30;

    const arrayTemp = [...this.state.history];
    let newTotal = { ...this.state };

    newTotal.total = parseFloat(newTotal.total) + value;

    const formatedTotal = (value).toFixed(2);

    arrayTemp.unshift(
      <li key={value} className="App__launch-list-item"> {/*this is dynamic too*/}
        <div className="App__launch-list-item-action">
          <p className="paragraph-3">MASTER ANTECIPACAO</p>
          <p className="paragraph-4">{this.localDate()}</p>
        </div>
        <p className="App__money App__money--3">R${this.numberWithCommas(formatedTotal)}</p>
      </li>
    );

    this.setState({
      total: (newTotal.total).toFixed(2),
      cheque: 0.00,
      history: arrayTemp,
      totalForDisplay: this.numberWithCommas(parseFloat(newTotal.total).toFixed(2))
    });

    this.onClickBackHome();
  }

  decreaseBalance = () => {
    const value = Math.random() * (30 - 0) + 0;;

    const arrayTemp = [...this.state.history];
    let newTotal = {...this.state};

    let formatedTotal;

    if (newTotal.total <= 0 && Math.abs(newTotal.total) > value) {

      newTotal.total = parseFloat(this.state.total) - parseFloat(this.state.total);

      formatedTotal = parseFloat(this.state.total);
    } else {
      newTotal.total = parseFloat(newTotal.total) - value;
      formatedTotal = value;
    }

    arrayTemp.unshift(
      <li key={value} className="App__launch-list-item"> {/*this is dynamic too*/}
        <div className="App__launch-list-item-action">
          <p className="paragraph-3">DÉBITO SEGURO</p>
          <p className="paragraph-4">{this.localDate()}</p>
        </div>
        <p className="App__money App__money--2">-R${this.numberWithCommas(formatedTotal.toFixed(2))}</p>
      </li>
    );

    this.setState({
      total: parseFloat(newTotal.total).toFixed(2),
      cheque: 0.00,
      history: arrayTemp,
      totalForDisplay: this.numberWithCommas(parseFloat(newTotal.total).toFixed(2))
    });

    this.onClickBackHome();
  }

  /**
     * Executes a given callback function each second(1000ms)
     * @param {function} callback 
     * @returns a function
     */
  regressiveTimer = (callback) => {
    callback();

    this.timeout = window.setTimeout(() => {
      this.regressiveTimer(callback);
    }, 4000);
  }

  regressiveTimer2 = (callback) => {
    callback();

    this.timeout = window.setTimeout(() => {
      this.regressiveTimer(callback);
    }, 6000);
  }

  render() {
    if (document.getElementById('balance') && !this.state.loaded) {
      this.onEyeClick();
      this.setState({
        loaded: true
      });
    }

    if (!this.state.loaded) {
      this.showBalanceDetails();
      this.setState({
        loaded: true
      });
    }

    // find a wayt to trigger render
    if (!this.state.loaded) {
      this.regressiveTimer(this.addBalance);
      this.regressiveTimer2(this.decreaseBalance);
    }

    return (
      <React.Fragment>
        {this.state.current}
      </React.Fragment>
    );
  }

}

export default Home;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import * as actions from '../store/actions/index';

import '../style/plans.css';
import logo from '../images/forgeNoBorder.png';
import owl from '../images/owl.svg';
import wfh from '../images/wfh.svg';
import money from '../images/money.svg';
import mom from '../images/mom.svg';
import verified from '../images/verified.svg';
import thumbsDown from '../images/thumbsDown.svg';
import netflix from '../images/netflix.png';
import paperAirplane from '../images/paperAirplane.svg';
import leaf from '../images/leaf.svg';
import market from '../images/market.svg';
import flag from '../images/flag.svg';
import arrow from '../images/arrow.svg';
import contract from '../images/contract.svg';
import forgeLogo from '../images/forgeLogo.png';
import forgeScore from '../images/forgeScore.png';
import { VictoryChart, VictoryBar, VictoryPolarAxis, VictoryTheme } from 'victory';

class Plans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleMinimize = () => {
    $('.console').toggleClass('minimized');
    if ($('.forgeElements').css('display') === 'none') {
      $('.forgeElements').css('display', 'flex');
    } else {
      $('.forgeElements').css('display', 'none');
    }
    $('.terminalText').toggle();
  };

  handleLogoClick = () => {
    $('.console').toggleClass('minimized');
    if ($('.forgeElements').css('display') === 'none') {  
      $('.forgeElements').css('display', 'flex');
    } else {
      $('.forgeElements').css('display', 'none');
    }
    $('.terminalText').toggle();
  };

  render() {
    console.log(this.props.premise);
    return (
      <div>
        <div className='contentContainer'>
          <div className='header'>
            In real time, Forge verifies the prospect's profitability and usage history against the
            Profiles you created.
          </div>
        </div>
        <div className='widgetContainer'>
          <img src={logo} className='costLogo' alt='logo' />
          <div className='costFloor'>Cost Floor: 6.1¢</div>
        </div>
        <div className='widgetContainer'>
          <div className='widget'>
            <span className='widgetTitle'>Work From Home</span>
            <img src={wfh} className='planLogo' alt='wfh' />
            <div className='costFloor'>+ 0.3¢</div>
            <img className='verified' src={verified} alt='verified' />
          </div>
          <div className='widget grayed'>
            <span className='widgetTitle'>Night Owl</span>
            <img src={owl} className='planLogo' alt='mom' />
            <div className='costFloor'>- 0.3¢</div>
          </div>
          <div className='widget grayed'>
            <span className='widgetTitle'>Off-Peak</span>
            <img src={money} className='planLogo' alt='money' />
            <div className='costFloor'>- 0.3¢</div>
          </div>
          <div className='widget grayed'>
            <span className='widgetTitle'>Energy Hog</span>
            <img src={thumbsDown} className='planLogo' alt='down' />
            <div className='costFloor'>+ 0.5¢</div>
          </div>
        </div>
        <div className='contentContainer'>
          <div className='header'>
            The Night Owl plan is bundled with all the components you configured.
          </div>
        </div>
        <div className='widgetContainer'>
          <div className='widget'>
            <span className='widgetTitle'>Free Netflix Sub</span>
            <img src={netflix} className='planLogo netflixLogo' alt='netflix' />
            <div className='costFloor'>+ 0.2¢</div>
          </div>
          <div className='widget'>
            <span className='widgetTitle'>E-Bill Paperless</span>
            <img src={paperAirplane} className='planLogo' alt='paperless' />
            <div className='costFloor'>- 0.1¢</div>
          </div>
          <div className='widget'>
            <span className='widgetTitle'>50% Green</span>
            <img src={leaf} className='planLogo' alt='leaf' />
            <div className='costFloor'>+ 0.3¢</div>
          </div>
        </div>
        <div className='contentContainer'>
          <div className='header'>
            Price in your target margin, or beat the market rate - whichever is higher.
          </div>
        </div>
        <div className='widgetContainer'>
          <div className='widget wider grayed'>
            <span className='widgetTitle'>30% Margin Target</span>
            <img src={flag} className='planLogo' alt='flag' />
            <div className='costFloor'>+ 0.5¢</div>
          </div>
          <div className='widget wider'>
            <span className='widgetTitle'>10% Market Discount</span>
            <img src={market} className='planLogo' alt='market' />
            <div className='costFloor'>+ 0.8¢</div>
            <img className='verified offset' src={verified} alt='verified' />
          </div>
          <div className='arrow'>
            <img src={arrow} alt='arrow' />
          </div>
          <div className='widget wider'>
            <span className='widgetTitle'>Custom EFL</span>
            <img src={contract} className='planLogo' alt='contract' />
            <div className='costFloor'>7.6¢</div>
          </div>
        </div>

        <div id='console' className='console transform minimized'>
          <img
            src={forgeLogo}
            className='forgeLogo minimized transform'
            onClick={() => this.handleLogoClick()}
            alt='forgelogo'
          />
          <div className='minToggle' onClick={() => this.handleMinimize()}>
            -
          </div>
          <div className='rawSMT'>{this.props.rawSMT}</div>
          <div className='consoleTitle'>Console</div>
          <div className='terminalText'>
            Premise address: {this.props.premise.addressLn1}
            <br />
            ESIID: {this.props.esiid}
            <br />
            15-minute data intervals processed: 2088
            <br />
            Average customer monthly usage: 1,837kWh
            <br />
            Profile matched: WFH
            <br />
            Forge calculated risk price deviation from average: +0.3¢
          </div>
          <div className='forgeElements'>
            <img src={forgeScore} className='forgeScore' alt='35' />
            <div className='forgeGraph'>
              <VictoryChart
                polar
                theme={VictoryTheme.grayscale}
                className='forgePiece'
                padding={25}
              >
                {['risk index', 'profitability', 'consumption', 'profile fit', 'peak demand'].map(
                  (d, i) => {
                    return (
                      <VictoryPolarAxis
                        dependentAxis
                        key={i}
                        label={d}
                        labelPlacement='perpendicular'
                        style={{ tickLabels: { fill: 'none' } }}
                        axisValue={d}
                      />
                    );
                  }
                )}
                <VictoryBar
                  style={{ data: { fill: '#08c', width: 25 } }}
                  data={[
                    { x: 'risk index', y: 5 },
                    { x: 'profitability', y: 2.5 },
                    { x: 'consumption', y: 5 },
                    { x: 'profile fit', y: 4.5 },
                    { x: 'peak demand', y: 4 },
                  ]}
                />
              </VictoryChart>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRepInput: search => dispatch(actions.search_rep(search)),
    onRepClick: (rorNum, repName) => dispatch(actions.set_rorNum(rorNum, repName)),
  };
};

const mapStateToProps = state => {
  return {
    searchRep: state.searchRep,
    PUCTRORNumber: state.PUCTRORNumber,
    repName: state.repName,
    esiid: state.esiid,
    searchAddy: state.searchAddy,
    premise: state.premise,
    rawSMT: state.rawSMT,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Plans);

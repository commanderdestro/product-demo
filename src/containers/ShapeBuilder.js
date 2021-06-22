import React from 'react';
import '../style/ShapeBuilder.css';
import _ from 'lodash';
import $ from 'jquery';
import {
  VictoryChart,
  VictoryStack,
  VictoryGroup,
  VictoryArea,
  VictoryScatter,
  VictoryLine,
  VictoryAxis,
  VictoryLegend,
} from 'victory';
import arrowWhite from '../images/arrowWhite.svg';

const initialPoints = [
  { x: new Date(2021, 5, 14, 0), y: 0.125 },
  { x: new Date(2021, 5, 14, 1), y: 0.125 },
  { x: new Date(2021, 5, 14, 2), y: 0.125 },
  { x: new Date(2021, 5, 14, 3), y: 0.125 },
  { x: new Date(2021, 5, 14, 4), y: 0.125 },
  { x: new Date(2021, 5, 14, 5), y: 0.125 },
  { x: new Date(2021, 5, 14, 6), y: 0.2 },
  { x: new Date(2021, 5, 14, 7), y: 0.4 },
  { x: new Date(2021, 5, 14, 8), y: 0.6 },
  { x: new Date(2021, 5, 14, 9), y: 0.6 },
  { x: new Date(2021, 5, 14, 10), y: 0.7 },
  { x: new Date(2021, 5, 14, 11), y: 0.7 },
  { x: new Date(2021, 5, 14, 12), y: 0.75 },
  { x: new Date(2021, 5, 14, 13), y: 0.85 },
  { x: new Date(2021, 5, 14, 14), y: 0.87 },
  { x: new Date(2021, 5, 14, 15), y: 0.85 },
  { x: new Date(2021, 5, 14, 16), y: 0.875 },
  { x: new Date(2021, 5, 14, 17), y: 0.95 },
  { x: new Date(2021, 5, 14, 18), y: 0.95 },
  { x: new Date(2021, 5, 14, 19), y: 0.85 },
  { x: new Date(2021, 5, 14, 20), y: 0.8 },
  { x: new Date(2021, 5, 14, 21), y: 0.5 },
  { x: new Date(2021, 5, 14, 22), y: 0.3 },
  { x: new Date(2021, 5, 14, 23), y: 0.125 },
];

const plotLine = initialPoints.map(point => {
  return {
    x: point.x,
    y: point.y * 1.5,
  };
});

class ShapeBuilder extends React.Component {
  constructor() {
    super();
    this.state = {
      points: initialPoints,
      usageLine: _.cloneDeep(plotLine),
      loadedShape: 'Houston Baseline',
      marketFit: 0.68,
      profitScore: 2.5,
    };
    this.onPointChange = this.updateData.bind(this);
  }

  updateData(point, index) {
    const currentPoints = this.state.points;
    currentPoints[index] = point;
    this.setState({ points: currentPoints });
  }

  hoverSlide() {}

  handleSlide(xChange, event) {
    let currPoints = _.cloneDeep(this.state.usageLine);
    for (let i = 0; i < xChange.length; i++) {
      currPoints[xChange[i]].y = plotLine[xChange[i]].y * event.target.value;
    }
    this.setState(...this.state, { usageLine: currPoints });
    $('.save').toggle(true); //{duration: 400, queue: false, });
  }

  handleSliderHover() {}

  handleSave() {
    this.setState(...this.state, { loadedShape: $('#profileName').val() });
    $('.save').toggle();
  }

  render() {
    return (
      <div>
        <div
          class='modal fade'
          id='modalSave'
          tabindex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div class='modal-dialog modal-sm'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h5 class='modal-title' id='exampleModalLabel'>
                  Save Custom Profile
                </h5>
                <button
                  type='button'
                  class='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>
              <div class='modal-body'>
                Name
                <input type='text' id='profileName' />
              </div>
              <div class='modal-footer'>
                <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>
                  Cancel
                </button>
                <button
                  type='button'
                  class='btn btn-secondary'
                  data-bs-dismiss='modal'
                  onClick={this.handleSave.bind(this)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        <h1 className='display-4 text-center'>Forge Behavior Profiler</h1>
        <div className='statBox'>
          <div className='statTitle'>Behavior Profile</div>
          <div className='avgProfile'>
            {this.state.loadedShape}
            <img src={arrowWhite} className='arrow' alt='next' />
          </div>
          Market Fit: <span className='stat'>{(this.state.marketFit * 100).toFixed(1) + '%'}</span>
          <br />
          Profit Score: <span className='stat'>{this.state.profitScore}</span>
          <button
            type='button'
            class='avgProfile save'
            data-bs-toggle='modal'
            data-bs-target='#modalSave'
            id='save'
          >
            Save Custom Profile
          </button>
          {/* <div className='avgProfile save' id='save'>
            Save Custom Profile
          </div> */}
        </div>
        <VictoryChart scale={{ x: 'time' }} width={1040} height={500}>
          <VictoryAxis tickCount={24} tickFormat={t => `${t.getHours()}`} />
          <VictoryStack colorScale='cool'>
            <VictoryGroup data={initialPoints}>
              <VictoryArea />
            </VictoryGroup>
            <VictoryGroup data={initialPoints}>
              <VictoryArea />
            </VictoryGroup>
            <VictoryGroup data={initialPoints}>
              <VictoryArea />
            </VictoryGroup>
          </VictoryStack>
          <VictoryLine
            style={{
              data: { stroke: '#FE1C41', strokeWidth: 3 },
            }}
            data={this.state.usageLine}
          />
          <VictoryScatter
            style={{ data: { fill: '#FE1C41' } }}
            size={5}
            data={this.state.usageLine}
            // dataComponent={<DraggablePoint onPointChange={this.onPointChange} />}
          />
          <VictoryLegend
            x={100}
            y={240}
            title='Usage Bands'
            centerTitle
            orientation='vertical'
            gutter={20}
            style={{ border: { stroke: 'black' }, title: { fontSize: 20 } }}
            colorScale='cool'
            data={[
              { name: 'High', symbol: { fill: '#2694DB' } },
              { name: 'Average', symbol: { fill: '#0A69D4' } },
              { name: 'Low', symbol: { fill: '#2644B4' } },
            ]}
          />
        </VictoryChart>
        <div className='slidersContainer'>
          <div className='rangeContainer dark'>
            <label htmlFor='rngNight' className='form-label' id='rangeLabel'>
              Overnight
            </label>
            <input
              type='range'
              className='form-range'
              id='rangeControl'
              min='0'
              max='2'
              step='0.1'
              defaultValue='1'
              onChange={this.handleSlide.bind(this, [0, 1, 2, 3, 4, 5, 6, 23])}
            />
          </div>
          <div className='rangeContainer dark'>
            <label htmlFor='rngNight' className='form-label' id='rangeLabel'>
              Morning
            </label>
            <input
              type='range'
              className='form-range'
              id='rangeControl'
              min='0'
              max='2'
              step='0.1'
              defaultValue='1'
              onChange={this.handleSlide.bind(this, [7, 8, 9, 10, 11])}
            />
          </div>
          <div className='rangeContainer dark'>
            <label htmlFor='rngNight' className='form-label' id='rangeLabel'>
              Afternoon
            </label>
            <input
              type='range'
              className='form-range'
              id='rangeControl'
              min='0'
              max='2'
              step='0.1'
              defaultValue='1'
              onChange={this.handleSlide.bind(this, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21])}
            />
          </div>
          <div className='rangeContainer dark'>
            <label htmlFor='rngNight' className='form-label' id='rangeLabel'>
              After Work
            </label>
            <input
              type='range'
              className='form-range'
              id='rangeControl'
              min='0'
              max='2'
              step='0.1'
              defaultValue='1'
              onChange={this.handleSlide.bind(this, [14, 15, 16, 17, 18, 19])}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ShapeBuilder;

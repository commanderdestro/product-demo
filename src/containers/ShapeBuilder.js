import React from 'react';
import smtTestData from '../data/smtTestData.json';
import '../style/ShapeBuilder.css';
import {
  VictoryChart,
  VictoryStack,
  VictoryGroup,
  VictoryArea,
  VictoryScatter,
  VictoryLine,
  Selection,
  Point,
} from 'victory';
import winter from '../images/winter.svg';
import spring from '../images/spring.svg';
import summer from '../images/summer.svg';
import fall from '../images/fall.svg';
import arrow from '../images/arrow.svg';

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

let avgPoints = initialPoints.map(point => {
  return {
    x: point.x,
    y: point.y * 1.5,
  };
});

class DraggablePoint extends React.Component {
  static defaultEvents = [
    {
      target: 'data',
      eventHandlers: {
        onMouseDown: () => ({
          mutation: props => Object.assign(props, { dragging: true }),
        }),
        onMouseMove: (evt, targetProps) => {
          if (targetProps.dragging) {
            const { x, y } = Selection.getSVGEventCoordinates(evt); // use Victory's selection helper
            return {
              mutation: props => Object.assign(props, { x, y }),
            };
          }
        },
        onMouseUp: () => ({
          mutation: props => Object.assign(props, { dragging: false }),
        }),
        onMouseLeave: () => ({
          mutation: props => Object.assign(props, { dragging: false }),
        }),
      },
    },
  ];

  render() {
    return <Point {...this.props} />;
  }
}

class ShapeBuilder extends React.Component {
  constructor() {
    super();
    this.state = { season: 'Summer', points: initialPoints };
    this.onPointChange = this.updateData.bind(this);
  }

  updateData(point, index) {
    const currentPoints = this.state.points;
    currentPoints[index] = point;
    this.setState({ points: currentPoints });
  }

  render() {
    return (
      <div>
        <div className='topBar'>
          <div className='filterContainer'>
            <div className='seasonTile greyed'>
              <img src={winter} alt='Winter' />
            </div>
            <div className='seasonTile greyed'>
              <img src={spring} alt='Spring' />
            </div>
            <div className='seasonTile'>
              <img src={summer} alt='Summer' />
            </div>
            <div className='seasonTile greyed'>
              <img src={fall} alt='Fall' />
            </div>
            <div className='day selectedLabel'>Mon</div>
            <div className='day dayGrey'>Tue</div>
            <div className='day dayGrey'>Wed</div>
            <div className='day dayGrey'>Thur</div>
            <div className='day dayGrey'>Fri</div>
            <div className='day dayGrey'>Sat</div>
            <div className='day dayGrey'>Sun</div>
          </div>

          <div className='shapeContainer'>
            <div className='arrow'>
              <img src={arrow} alt='arrow' />
            </div>
            <div className='shape greyed'>shape 2</div>
            <div className='shape greyed'>shape 3</div>
            <div className='shape'>Save Custom Shape</div>
          </div>
        </div>
        <VictoryChart scale={{ x: 'time' }} width={1040} height={500}>
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
            animate={{
              duration: 3000,
              onLoad: { duration: 3000 },
            }}
            data={avgPoints}
          />
          <VictoryScatter
            style={{ data: { fill: '#FE1C41' } }}
            size={5}
            data={avgPoints}
            // dataComponent={<DraggablePoint onPointChange={this.onPointChange} />}
          />
        </VictoryChart>
      </div>
    );
  }
}
export default ShapeBuilder;

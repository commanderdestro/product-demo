import React from 'react';
import smtTestData from '../data/smtTestData.json';
import {
  VictoryChart,
  VictoryStack,
  VictoryGroup,
  VictoryArea,
  VictoryPortal,
  VictoryScatter,
  VictoryLine,
  Selection,
  Point,
} from 'victory';

const initialPoints = [
  {
    Winter: [
      { x: new Date(2020, 11, 1), y: 2 },
      { x: new Date(2021, 0, 1), y: 2 },
      { x: new Date(2021, 1, 1), y: 2 },
    ],
  },
  {
    Spring: [
      { x: new Date(2021, 2, 1), y: 2 },
      { x: new Date(2021, 3, 1), y: 2 },
      { x: new Date(2021, 4, 1), y: 2 },
    ],
  },
  {
    Summer: [
      { x: new Date(2021, 5, 1), y: 2 },
      { x: new Date(2021, 6, 1), y: 2 },
      { x: new Date(2021, 7, 1), y: 2 },
    ],
  },
  {
    Fall: [
      { x: new Date(2021, 8, 1), y: 2 },
      { x: new Date(2021, 9, 1), y: 2 },
      { x: new Date(2021, 10, 1), y: 2 },
    ],
  },
];

class DraggablePoint extends React.Component {
  static defaultEvents = [
    {
      target: 'data',
      eventHandlers: {
        onMouseOver: () => ({
          mutation: props => Object.assign({}, props, { active: true }),
        }),
        onMouseDown: () => ({
          mutation: props => Object.assign({}, props, { dragging: true }),
        }),
        onMouseMove: (evt, targetProps) => {
          const { scale, onPointChange, datum } = targetProps;
          if (targetProps.dragging) {
            const { x, y } = Selection.getSVGEventCoordinates(evt);
            const point = { x: x, y: scale.y.invert(y) };
            const index = datum.index;
            onPointChange(point, index); // call your event handler to set state for your app
            return { mutation: () => Object.assign({}, targetProps, { x, y }) }; // actually move the points
          }
          return null;
        },
        onMouseUp: () => ({
          mutation: props => Object.assign({}, props, { dragging: false, active: false }),
        }),
        onMouseLeave: () => ({
          mutation: props => Object.assign({}, props, { dragging: false, active: false }),
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
    debugger;
    const currentPoints = this.state.points;
    currentPoints[index] = point;
    this.setState({ points: currentPoints });
  }

  render() {
    return (
      <div>
        <VictoryChart scale={{ x: 'time' }} width={1440} height={800}>
          <VictoryStack colorScale='warm'>
            <VictoryGroup
              data={[
                { x: new Date(2021, 5, 14, 0), y: 0.125 },
                { x: new Date(2021, 5, 14, 1), y: 0.125 },
                { x: new Date(2021, 5, 14, 2), y: 0.125 },
                { x: new Date(2021, 5, 14, 3), y: 0.125 },
                { x: new Date(2021, 5, 14, 4), y: 0.125 },
                { x: new Date(2021, 5, 14, 5), y: 0.125 },
                { x: new Date(2021, 5, 14, 6), y: 0.2 },
                { x: new Date(2021, 5, 14, 7), y: 0.7 },
                { x: new Date(2021, 5, 14, 8), y: 0.8 },
                { x: new Date(2021, 5, 14, 9), y: 0.6 },
                { x: new Date(2021, 5, 14, 10), y: 0.3 },
                { x: new Date(2021, 5, 14, 11), y: 0.3 },
                { x: new Date(2021, 5, 14, 12), y: 0.4 },
                { x: new Date(2021, 5, 14, 13), y: 0.4 },
                { x: new Date(2021, 5, 14, 14), y: 0.5 },
                { x: new Date(2021, 5, 14, 15), y: 0.6 },
                { x: new Date(2021, 5, 14, 16), y: 0.7 },
                { x: new Date(2021, 5, 14, 17), y: 0.7 },
                { x: new Date(2021, 5, 14, 18), y: 0.7 },
                { x: new Date(2021, 5, 14, 19), y: 0.6 },
                { x: new Date(2021, 5, 14, 20), y: 0.5 },
                { x: new Date(2021, 5, 14, 21), y: 0.4 },
                { x: new Date(2021, 5, 14, 22), y: 0.3 },
                { x: new Date(2021, 5, 14, 23), y: 0.2 },
              ]}
            >
              <VictoryArea />
            </VictoryGroup>
            <VictoryGroup
              data={[
                { x: new Date(2021, 5, 14, 0), y: 0.125 },
                { x: new Date(2021, 5, 14, 1), y: 0.125 },
                { x: new Date(2021, 5, 14, 2), y: 0.125 },
                { x: new Date(2021, 5, 14, 3), y: 0.125 },
                { x: new Date(2021, 5, 14, 4), y: 0.125 },
                { x: new Date(2021, 5, 14, 5), y: 0.125 },
                { x: new Date(2021, 5, 14, 6), y: 0.2 },
                { x: new Date(2021, 5, 14, 7), y: 0.7 },
                { x: new Date(2021, 5, 14, 8), y: 0.8 },
                { x: new Date(2021, 5, 14, 9), y: 0.6 },
                { x: new Date(2021, 5, 14, 10), y: 0.3 },
                { x: new Date(2021, 5, 14, 11), y: 0.3 },
                { x: new Date(2021, 5, 14, 12), y: 0.4 },
                { x: new Date(2021, 5, 14, 13), y: 0.4 },
                { x: new Date(2021, 5, 14, 14), y: 0.5 },
                { x: new Date(2021, 5, 14, 15), y: 0.6 },
                { x: new Date(2021, 5, 14, 16), y: 0.7 },
                { x: new Date(2021, 5, 14, 17), y: 0.7 },
                { x: new Date(2021, 5, 14, 18), y: 0.7 },
                { x: new Date(2021, 5, 14, 19), y: 0.6 },
                { x: new Date(2021, 5, 14, 20), y: 0.5 },
                { x: new Date(2021, 5, 14, 21), y: 0.4 },
                { x: new Date(2021, 5, 14, 22), y: 0.3 },
                { x: new Date(2021, 5, 14, 23), y: 0.2 },
              ]}
            >
              <VictoryArea />
            </VictoryGroup>
            <VictoryGroup
              data={[
                { x: new Date(2021, 5, 14, 0), y: 0.125 },
                { x: new Date(2021, 5, 14, 1), y: 0.125 },
                { x: new Date(2021, 5, 14, 2), y: 0.125 },
                { x: new Date(2021, 5, 14, 3), y: 0.125 },
                { x: new Date(2021, 5, 14, 4), y: 0.125 },
                { x: new Date(2021, 5, 14, 5), y: 0.125 },
                { x: new Date(2021, 5, 14, 6), y: 0.2 },
                { x: new Date(2021, 5, 14, 7), y: 0.7 },
                { x: new Date(2021, 5, 14, 8), y: 0.8 },
                { x: new Date(2021, 5, 14, 9), y: 0.6 },
                { x: new Date(2021, 5, 14, 10), y: 0.3 },
                { x: new Date(2021, 5, 14, 11), y: 0.3 },
                { x: new Date(2021, 5, 14, 12), y: 0.4 },
                { x: new Date(2021, 5, 14, 13), y: 0.4 },
                { x: new Date(2021, 5, 14, 14), y: 0.5 },
                { x: new Date(2021, 5, 14, 15), y: 0.6 },
                { x: new Date(2021, 5, 14, 16), y: 0.7 },
                { x: new Date(2021, 5, 14, 17), y: 0.7 },
                { x: new Date(2021, 5, 14, 18), y: 0.7 },
                { x: new Date(2021, 5, 14, 19), y: 0.6 },
                { x: new Date(2021, 5, 14, 20), y: 0.5 },
                { x: new Date(2021, 5, 14, 21), y: 0.4 },
                { x: new Date(2021, 5, 14, 22), y: 0.3 },
                { x: new Date(2021, 5, 14, 23), y: 0.2 },
              ]}
            >
              <VictoryArea />
            </VictoryGroup>
            {/* <VictoryGroup
              data={[
                { x: new Date(1986, 1, 1), y: 4 },
                { x: new Date(1996, 1, 1), y: 3 },
                { x: new Date(2006, 1, 1), y: 2 },
                { x: new Date(2016, 1, 1), y: 5 }
              ]}
            >
              <VictoryArea/>
             <VictoryPortal>
                <VictoryScatter
                  style={{ data: { fill: "black" } }}
                />
              </VictoryPortal>
            </VictoryGroup>
            <VictoryGroup
              data={[
                { x: new Date(1986, 1, 1), y: 3 },
                { x: new Date(1996, 1, 1), y: 1 },
                { x: new Date(2006, 1, 1), y: 4 },
                { x: new Date(2016, 1, 1), y: 2 }
              ]}
            >
              <VictoryArea/>
              <VictoryPortal>
                <VictoryScatter
                  style={{ data: { fill: "black" } }}
                />
              </VictoryPortal>
            </VictoryGroup> */}
          </VictoryStack>
          <VictoryLine
            stype={{
              data: { stroke: '#000' },
            }}
            data={[
              { x: new Date(2021, 5, 14, 0), y: 0.1875 },
              { x: new Date(2021, 5, 14, 1), y: 0.1875 },
              { x: new Date(2021, 5, 14, 2), y: 0.1875 },
              { x: new Date(2021, 5, 14, 3), y: 0.1875 },
              { x: new Date(2021, 5, 14, 4), y: 0.1875 },
              { x: new Date(2021, 5, 14, 5), y: 0.1875 },
              { x: new Date(2021, 5, 14, 6), y: 0.3 },
              { x: new Date(2021, 5, 14, 7), y: 1.05 },
              { x: new Date(2021, 5, 14, 8), y: 1.2 },
              { x: new Date(2021, 5, 14, 9), y: 0.9 },
              { x: new Date(2021, 5, 14, 10), y: 0.45 },
              { x: new Date(2021, 5, 14, 11), y: 0.45 },
              { x: new Date(2021, 5, 14, 12), y: 0.6 },
              { x: new Date(2021, 5, 14, 13), y: 0.6 },
              { x: new Date(2021, 5, 14, 14), y: 0.725 },
              { x: new Date(2021, 5, 14, 15), y: 0.9 },
              { x: new Date(2021, 5, 14, 16), y: 1.05 },
              { x: new Date(2021, 5, 14, 17), y: 1.05 },
              { x: new Date(2021, 5, 14, 18), y: 1.05 },
              { x: new Date(2021, 5, 14, 19), y: 0.9 },
              { x: new Date(2021, 5, 14, 20), y: 0.725 },
              { x: new Date(2021, 5, 14, 21), y: 0.6 },
              { x: new Date(2021, 5, 14, 22), y: 0.45 },
              { x: new Date(2021, 5, 14, 23), y: 0.3 },
            ]}
          />
        </VictoryChart>
      </div>
    );
  }
}
export default ShapeBuilder;

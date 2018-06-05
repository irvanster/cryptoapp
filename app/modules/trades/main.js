import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryArea, VictoryLabel,VictoryClipContainer } from "victory-native";

const data =
  [
    { x: 1, y: 2, y0: 0 },
    { x: 2, y: 3, y0: 0 },
    { x: 3, y: 5, y0: 0 },
    { x: 4, y: 4, y0: 0 },
    { x: 5, y: 6, y0: 0 },
    { x: 7, y: 6, y0: 0 },
    { x: 9, y: 4, y0: 0 }
  ]
  

let _interval;
export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      lineChart : [    { x: 1, y: 2, y0: 0 },
        { x: 2, y: 3, y0: 0 },
        { x: 3, y: 5, y0: 0 },
        { x: 4, y: 4, y0: 0 },
        { x: 5, y: 6, y0: 0 },
        { x: 7, y: 6, y0: 0 },
        { x: 9, y: 4, y0: 0 }]
    }
  }
  
  componentDidMount = () => {
    _interval = setInterval(() => {
        // Your code
        let newArray = this.state.lineChart;
        newArray.push({x: newArray.length + 2, y:Math.floor(Math.random() * (10 - (0) + 1)) + (0),y0:0});
        this.setState({
            lineChart : newArray
        })

      }, 2000);
};
componentWillUnmount = () => {
  clearInterval(_interval)
};
  render() {
    return (
      <View style={styles.container}>
      <VictoryChart
          theme={VictoryTheme.material}
        >
          <VictoryArea

            groupComponent={<VictoryClipContainer clipPadding={{ top: 10, right: 5 }}/>}
            style={{ data: { stroke: "#c43a31", strokeWidth: 1, strokeLinecap: "round" } }}
            labels={(datum) => datum.y}
            data={this.state.lineChart}
            labelComponent={<VictoryLabel renderInPortal dy={-20}/>}
            
          />
        </VictoryChart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});
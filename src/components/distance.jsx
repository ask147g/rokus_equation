import React from "react";
import * as consts from  "../consts/values"
import CalculateDistance from "./calculateDistance";

class Distance extends React.Component {
  constructor() {
    super();
  }

  state = {
    startDistance: false,
    A0: 0,
    date0: "",
    date: "",
    T: 0,
    r0: 0,
    rl: 0,
    x: 0,
    y:0
 }

  add() {
    this.setState({startDistance: !this.state.startDistance})
  }

  render() {
  return (
    <>
      Начальная активность, Ки: <input className="dist" name="A0" defaultValue={consts.activity0}></input>
      Период полураспада, лет: <input className="dist" name="T" defaultValue={consts.T}></input>
      Дата начальной активности: <input className="dist" type="date" name="date0" defaultValue={consts.date0}></input>
      Дата расчета: <input className="dist" type="date" name="date" defaultValue={consts.date}></input>
      Начальное расстояние, см:
      <input className="dist" name="r0" defaultValue={consts.r0}></input>
      Конечное расстояние, см:
      <input className="dist" name="rl" defaultValue={consts.rl}></input>
      Ось x, см:
      <input className="dist" name="x" defaultValue={consts.x}></input>
      Ось y, см:
      <input className="dist" name="y" defaultValue={consts.y}></input>

      <button className="calculate" onClick={() => this.add()}>
        Расчет
      </button>

      {this.state.startDistance &&  <CalculateDistance values={this.state} />}
    </>
  )
}
}

export default Distance;
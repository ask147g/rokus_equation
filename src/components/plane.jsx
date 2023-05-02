import React from "react";
import * as consts from  "../consts/values"
import CalculatePlane from "./calculatePlane";

class Plane extends React.Component {
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
    L: 0
 }

  add() {
    this.setState({startDistance: !this.state.startDistance})
  }

  render() {
  return (
    <>
      Начальная активность, Ки: <input className="plane" name="A0" defaultValue={consts.activity0}></input>
      Период полураспада, лет: <input className="plane" name="T" defaultValue={consts.T}></input>
      Дата начальной активности: <input className="plane" type="date" name="date0" defaultValue={consts.date0}></input>
      Дата расчета: <input className="plane" type="date" name="date" defaultValue={consts.date}></input>
      Расстояние, см:
      <input className="plane" name="r0" defaultValue={consts.r0}></input>
      Плоскость L, см:
      <input className="plane" name="Ll" defaultValue={consts.L}></input>

      <button onClick={() => this.add()}>
        Расчет
      </button>

      {this.state.startDistance &&  <CalculatePlane values={this.state} />}
    </>
  )
}
}

export default Plane;
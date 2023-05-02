import React from "react";
import { calculateDose } from "../consts/equation";
import DistancePlot from "./distancePlot";

class CalculateDistance extends React.Component {
constructor() {
    super();
    this.calculate();
}
state = {
    end: false
};

    calculate() {
        const up_names = document.getElementsByName("A0");
        const A0 = up_names[0].value;

        const up_names2 = document.getElementsByName("date0");
        const date0 = up_names2[0].value;

        const up_names3 = document.getElementsByName("date");
        const date = up_names3[0].value;

        const up_names4 = document.getElementsByName("r0");
        const r0 = up_names4[0].value;

        const up_names5 = document.getElementsByName("rl");
        const rl = up_names5[0].value;

        const up_names6 = document.getElementsByName("x");
        const x = up_names6[0].value;

        const up_names7 = document.getElementsByName("y");
        const y = up_names7[0].value;

        const up_names8 = document.getElementsByName("T");
        const T = up_names8[0].value;

        let dd = date0.split("-");
        let dd2 = date.split("-");

        const dt = ((dd2[0]*365+dd2[1]*30+dd2[2]*1)-(dd[0]*365+dd[1]*30+dd[2]*1))/(365);
        let dose = [];
        let r = [];
        for (let i = r0; i <= rl; i++) {
            dose[i] = calculateDose(A0, dt, T, i, x, y);
            r[i] = i;
        }
        this.state = {
            r: r,
            dose: dose,
            end: true
        }
    }
  render() {
  return (
    <>
      {this.state.end &&  <DistancePlot distance={this.state.r} dose={this.state.dose} />}
    </>
  )
}
}

export default CalculateDistance;
import React from "react";
import { calculateDose } from "../consts/equation";
import DistancePlot from "./distancePlot";
import PlanePlot from "./planePlot";

class CalculatePlane extends React.Component {
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

        //console.log(up_names4[0].value)
        const up_names5 = document.getElementsByName("Ll");
        const L = up_names5[0].value;

        //const L = 100;

        const up_names8 = document.getElementsByName("T");
        const T = up_names8[0].value;

        let dd = date0.split("-");
        let dd2 = date.split("-");

        const dt = ((dd2[0]*365+dd2[1]*30+dd2[2]*1)-(dd[0]*365+dd[1]*30+dd[2]*1))/(365);
        let dose = [];
        let xv = [];
        let yv = [];
        for (let i = 0; i <= L; i++) { // x
            let xx = -L/2+i;
            for (let k = 0; k <= L; k++) { // y
                let yy = -L/2+k;
                dose.push(calculateDose(A0, dt, T, r0, Math.abs(xx), Math.abs(yy)));
                xv.push(xx);                
                yv.push(yy);                
            }
        }
        this.state = {
            xv: xv,
            yv: yv,
            dose: dose,
            end: true
        }
    }
  render() {
  return (
    <>
      {this.state.end &&  <PlanePlot xv={this.state.xv} yv={this.state.yv} dose={this.state.dose} />}
    </>
  )
}
}

export default CalculatePlane;
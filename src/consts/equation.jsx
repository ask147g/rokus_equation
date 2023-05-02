const k1 = 0.00135;
const k2 = 2.24757;
const k3 = 0.99981;
const k4 = 0.00811;
const k5 = 1.6111;
const k6 = 0.00002;
const k7 = -0.0145;
const k8 = -0.0029;
const k9 = 1.4696;
const k10 = 0.1756;
const k11 = 6.0656;
const k12 = 0.0235;
const k13 = -0.5707;
const k14 = -0.0006;
const k15 = 0.1089;
const k16 = 0.00001;
const k17 = 0.9809;
const k18 = 0.1868;
const k19 = -4.0164;
const k20 = 0.0202;
const k21 = -1.0354;


export function calculateDose(A0, dt, T, r, x, y) {
    let v1 = (k1*A0*Math.exp(-dt/T)+k2)/(k3+k4*Math.pow(r, k5));
    let v2 = k6*r+k7+(k8*r+k9-k6*r-k7)/(1+Math.exp((Math.abs(y)-k10*r-k11)/(k12*r+k13)));
    let v3 = k14*r+k15+(k16*r+k17-k14*r-k15)/(1+Math.exp((Math.abs(x)-k18*r-k19)/(k20*r+k21)));
    if (r < 164) {
        const k22 = -0.0108;
        const k23 = 0.99508;
        const k24 = 34.8643;
        const k25 = 3.27772;
        const k26 = 0.1089;
        const k27 = 0.9809;
        const k28 = 4.0164;
        const k29 = -1.0354;
        v2 = k22+(k23-k22)/(1+Math.exp((Math.abs(y)-k24)/(k25)));
        v3 = k26+(k27-k26)/(1+Math.exp((Math.abs(x)-k28)/(k29)));
    }
    if (r > 500) {
        const k22 = -0.0032;
        const k23 = 0.02297;
        const k24 = 93.8665;
        const k25 = 11.1622;
        const k26 = -0.1935;
        const k27 = 0.98779;
        const k28 = 89.4046;
        const k29 = 9.04463;
        v2 = k22+(k23-k22)/(1+Math.exp((Math.abs(y)-k24)/(k25)));
        v3 = k26+(k27-k26)/(1+Math.exp((Math.abs(x)-k28)/(k29)));
    }
    
    return v1*v2*v3;
}
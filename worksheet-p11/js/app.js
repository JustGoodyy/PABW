import { state, muatKeadaanAwal, muat } from './state.js';
import { pasangPendengar } from './events.js';
import { render } from './dom.js';

muatKeadaanAwal();
pasangPendengar();
render(state);

window.state = state;
window.muat = muat;
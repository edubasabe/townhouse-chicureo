var vue = require('vue');
var domotica = new Vue({
  el: '#productos',
  data: {
    productos: [
      {
        imgsrc: 'https://tuhogarinteligente.cl/inmobi/townhouse-chicureo/assets/images/productos/hcl.jpg',
        title: 'Home Center Lite',
        cant: '1 Unidad',
        desc: 'Controlador principal del sistema FIBARO',
        link: 'https://tuhogarinteligente.cl/home-center-lite/'
      },
      {
        imgsrc: 'https://tuhogarinteligente.cl/inmobi/townhouse-chicureo/assets/images/productos/dimmer-2.jpg',
        title: 'Dimmer',
        cant: '2 Unidades',
        desc: 'Varía la intensidad de las luces.',
        nota: '* Fuentes dimmeables.',
        link: 'https://tuhogarinteligente.cl/producto/universal-dimmer-2/'
      },
      {
        imgsrc: 'https://tuhogarinteligente.cl/inmobi/townhouse-chicureo/assets/images/productos/relay-switch-2-5kw.jpg',
        title: 'Relay 1x2,5 kw',
        cant: '1 Unidad',
        desc: 'Controla 1 toma de corriente.',
        link: 'https://tuhogarinteligente.cl/producto/relay-switch-2x15-kw/'
      },
      {
        imgsrc: 'https://tuhogarinteligente.cl/inmobi/townhouse-chicureo/assets/images/productos/motion-sensor.jpg',
        title: 'Motion Sensor',
        cant: '1 Unidad',
        desc: 'Detecta el más mínimo movimiento, temperatura, vibración e intensidad de luz.',
        link: 'https://tuhogarinteligente.cl/sensor-de-movimiento/'
      },


    ],
  }
});

var $ = require('jquery');

$('#section-tipos .dropdown-menu > li').on('click', function () {
$('#section-tipos .dropdown-menu > li').toggleClass('active').siblings().removeClass('active').attr('aria-expanded', 'false');
});


$(document).on('load', function () {

  $('#loft.tab-pane .tipos__content ul.list-unstyled').html(`
  <li>- Hall de acceso en doble altura</li>
  <li>- Dormitorio principal en suite con terraza</li>
  <li>- Dormitorio secundario</li>
  <li>- Home office</li>
  <li>- Baño en suite con hidromasaje y grifería alemana</li>
  <li>- Cocina con campana, horno y encimera eléctrica y lavavajillas de origen alemán</li>
  <li>- Terraza de 12.5 m2 aproximado, envigado, barbecue y lockers</li>
  <li>- Jardín privado de uso exclusivo de aproximadamente 16 m2 con acceso directo a sector de parques</li>
  <li>- Construcción en hormigón armado en paredes exteriores y losas</li>
  <li>- Eficiente sistema de aislación térmica con sistema EIFS en paredes y cámara de aislación en techos</li>
  <li>- Ventanas de PVC con folio color madera y termopanel</li>
  <li>- Calefacción por radiadores</li>
  <li>- Conexiones para instalación de aire acondicionado split</li>
  <li>- Puertas enchapadas en todos los ambientes</li>
  <li>- Pisos flotantes fotolaminados y porcelanato en baños y cocinas</li>
  <li>- Domótica Ready</li>
    `);




});



//------------------------------------------------------------------------------
// VueJS
//------------------------------------------------------------------------------

var deptos = new Vue({
  el: '#section-tipos',
  data: {
    deptos: [
      {
        id: 'loft',
        class: 'tab-pane active',
        imgsrc: 'https://tuhogarinteligente.cl/inmobi/cubica-montemar/assets/images/101a401.jpg',
        title: 'LOFT',
        price: '8.499',
        desc: 'Ubicados en segundo piso, Loft en doble altura con una superficie Útil de 120 m2, cuentan con 3 Dormitorios, 2 Baños, Estar privado y Terraza de 17 m2 con Barbecue.',
        nota: '* Depto. 101 con gradas en 1er nivel',
        util: '136.28',
        terraza: '28.07',
        total: '164.35'
      },
      {
        id: 'deptos',
        class: 'tab-pane',
        imgsrc: 'https://tuhogarinteligente.cl/inmobi/cubica-montemar/assets/images/102a502.jpg',
        title: 'DEPTO',
        price: '6.360',
        desc: 'Ubicados en primer piso con una Superficie Útil de 83 m2, cuentan con 2 Dormitorios, 2 Baños, Home Office, Terrazas con Barbecue y un Jardín privado.',
        nota: '* PRIMER PISO ALTURA DE PISO A CIELO 2.90 M. SEGUNDO A QUINTO PISO ALTURA DE 2.60 M.',
        util: '90.89',
        terraza: '16.89',
        total: '107.78'
      },
    ],
  },
});

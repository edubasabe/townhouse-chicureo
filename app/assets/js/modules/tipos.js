var $ = require('jquery');

$('#section-tipos .dropdown-menu > li').on('click', function () {
$('#section-tipos .dropdown-menu > li').toggleClass('active').siblings().removeClass('active').attr('aria-expanded', 'false');
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
        img1: './assets/images/proyecto/loft-piso-1-etapa-III.jpg',
        img2: './assets/images/proyecto/loft-piso-2-etapa-III.jpg',
        title: 'Loft',
        price: '8.049',
        desc: 'Ubicados en segundo piso, Loft en doble altura con una superficie Útil de 120 m2, cuentan con 3 Dormitorios, 2 Baños, Estar privado y Terraza de 17 m2 con Barbecue.',
        caracteristicas: [
          { item: '- Hall de acceso en doble altura' },
          { item: '- Baño en suite con ducha e hidromasaje y grifería alemana' },
          { item: '- Amplias Terrazas totalmente terminadas con barbecue y bodegas' },
          { item: '- Eficiente sistema de aislación térmica con sistema EIFS en paredes y cámara de aislación en techos' },
          { item: '- Ventanas de PVC con folio color madera y termopanel' },
          { item: '- Calefacción por radiadores' },
          { item: '- Conexiones para instalación de aire acondicionado split' },
          { item: '- Cocina con campana, horno y encimera eléctrica y lavavajillas de origen alemán' },
          { item: '- Pisos flotantes fotolaminados y porcelanato en baños y cocinas' },
        ],
      },
      {
        id: 'deptos',
        class: 'tab-pane',
        img1: './assets/images/proyecto/departamento-etapa-III.jpg',
        title: 'Departamentos',
        price: '6.360',
        desc: 'Ubicados en primer piso con una Superficie Útil de 83 m2, cuentan con 2 Dormitorios, 2 Baños, Home Office, Terrazas con Barbecue y un Jardín privado.',
        caracteristicas: [
          { item: '- Hall de acceso en doble altura' },
          { item: '- Baño en suite con hidromasaje y grifería alemana' },
          { item: '- Cocina con campana, horno y encimera eléctrica y lavavajillas de origen alemán' },
          { item: '- Terraza de 12.5 m2 aproximado, envigado, barbecue y lockers' },
          { item: '- Eficiente sistema de aislación térmica con sistema EIFS en paredes y cámara de aislación en techos' },
          { item: '- Ventanas de PVC con folio color madera y termopanel' },
          { item: '- Calefacción por radiadores' },
          { item: '- Conexiones para instalación de aire acondicionado split' },
          { item: '- Pisos flotantes fotolaminados y porcelanato en baños y cocinas' },
        ],
      },
    ],
  },
});

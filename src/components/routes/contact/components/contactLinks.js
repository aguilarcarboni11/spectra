import {ContactTypes} from '../../../types/types.tsx'

const orange = '#e77c39'
const iconSize = '2vmax'

export const contactLinks = [
    {
      id: ContactTypes.PHONE,
      name: 'Telefono',
      description: `Llamanos!`,
      icon: <i class="bi bi-phone-vibrate-fill" style={{fontSize: iconSize, color: orange}}></i>,
      url: 'tel:+506 2519-5709'
    },
    {
      id: ContactTypes.EMAIL,
      name: 'Correo',
      description: `Mandanos un correo!`,
      icon: <i class="bi bi-envelope-fill" style={{fontSize: iconSize, color: orange}}></i>,
      url: 'mailto:prias@cenat.ac.cr'
    },
    {
      id: ContactTypes.WEBSITE,
      name: 'Website',
      description: `Entrá a la pagina del PRIAS`,
      icon: <i class="bi bi-browser-chrome"  style={{fontSize: iconSize, color: orange}}></i>,
      url: 'https://prias.cenat.ac.cr/es/'
    },
    {
      id: ContactTypes.LINKEDIN,
      name: 'LinkedIn',
      description: '@laboratorio-prias',
      icon: <i class="bi bi-linkedin" style={{fontSize: iconSize, color: orange}}></i>,
      url: 'https://www.linkedin.com/company/laboratorio-prias/'
    },
    {
      id: ContactTypes.INSTAGRAM,
      name: 'Instagram',
      description: '@laboratorio-prias',
      icon: <i class="bi bi-instagram" style={{fontSize: iconSize, color: orange}}></i>,
      url: 'https://www.linkedin.com/company/laboratorio-prias/'
    },
    {
      id: ContactTypes.FACEBOOK,
      name: 'Facebook',
      description: '@centro-nacional-alta-tecnologia',
      icon: <i class="bi bi-facebook" style={{fontSize: iconSize, color: orange}}></i>,
      url: 'https://www.linkedin.com/company/laboratorio-prias/'
    },
    {
      id: ContactTypes.DIRECTIONS,
      name: 'Direcciones',
      description: `Ir con Waze`,
      icon: <i class="bi bi-map-fill" style={{fontSize: iconSize, color: orange}}></i>,
      url: 'https://waze.com/ul/hd1u0teqp3'
    },
  ]
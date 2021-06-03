import au from '../../assets/img/au.png';
import be from '../../assets/img/be.png';
import es from '../../assets/img/es.png';
import gb from '../../assets/img/gb.png';
import us from '../../assets/img/us.png';
import jp from '../../assets/img/jp.png';
import ca from '../../assets/img/ca.png';

const getCountryCode = (code) => {
    switch (code) {
        case 'AU': {
            return au;
        }
        case 'BE': {
            return be;
        }
        case 'ES': {
            return es;
        }
        case 'GB': {
            return gb;
        }
        case 'US': {
            return us;
        }
        case 'JP': {
            return jp;
        }
        case 'CA': {
            return ca;
        }
        default: {
            return null
        }
    }
}

export {getCountryCode};
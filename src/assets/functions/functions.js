import au from '../../assets/img/au.png';
import be from '../../assets/img/be.png';
import es from '../../assets/img/es.png';
import gb from '../../assets/img/gb.png';
import us from '../../assets/img/us.png';

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
        default: {
            return null
        }
    }
}

export {getCountryCode};
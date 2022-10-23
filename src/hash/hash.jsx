import HashHero from './hero/hero';
import HashAbout from './about/about';
import Events from './events/events';
import './hash.css';
import ScrollBanner from '../components/scrollBanner/scrollBanner';

function Hash() {
    return (
        <div className="Hash">
            <div className="wavyTexture"></div>
            <div className="noiseTexture"></div>
            <HashHero />
            {/* <Events /> */}
            {/* <HashAbout /> */}
        </div>
    );
}

export default Hash;

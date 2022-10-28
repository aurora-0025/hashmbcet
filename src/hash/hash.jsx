import HashHero from './hero/hero';
import HashAbout from './about/about';
import Events from './events/events';
import './hash.css';
import ScrollBanner from '../components/scrollBanner/scrollBanner';
import HashFooter from './footer/footer';

function Hash() {
    return (
        <div className="Hash">
            <div className="glitchTexture"></div>
            <div className="wavyTexture"></div>
            <div className="noiseTexture"></div>

            <HashHero></HashHero>
            <HashAbout></HashAbout>
            {/* <HashAbout></HashAbout>
            <HashHero></HashHero>; */}
            <Events></Events>
            <HashFooter></HashFooter>
        </div>
    );
}

export default Hash;

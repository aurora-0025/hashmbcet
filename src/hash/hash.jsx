import HashHero from './hero/hero';
import HashAbout from './about/about';
import Events from './events/events';
import './hash.css';
import HashFooter from './footer/footer';
import HashSponsors from './sponsors/sponsors';
import Timeline from './timeline/timeline';

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
            <Timeline/>
            <HashSponsors></HashSponsors>
            <HashFooter></HashFooter>
        </div>
    );
}

export default Hash;

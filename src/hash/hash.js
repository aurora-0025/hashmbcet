import HashHero from './hero/hero';
import HashAbout from './about/about';
import './hash.css';
import ScrollBanner from '../components/scrollBanner/scrollBanner';

function Hash() {
    return (
        <div className="Hash">
            <ScrollBanner />
            <HashHero />
            {/* <HashAbout></HashAbout>
            <HashHero></HashHero>; */}
        </div>
    );
}

export default Hash;

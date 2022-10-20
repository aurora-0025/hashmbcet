import LightBulbImage from './../../assets/images/defineLightBulbVideo.gif';
import { BackgroundContext } from './../../App';
import { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import HashLogo from './../../assets/images/HashWordmark.svg';
import BackgroundImage from './../../assets/images/HashHeroBackground.png';
import './hero.css';
import HUIButton from '../../components/button/button';
import ScrollBanner from '../../components/scrollBanner/scrollBanner';

function HashHero() {
    // const { ref, inView } = useInView({
    //     /* Optional options */
    //     threshold: 0.6,
    // });

    // const { setBackground } = useContext(BackgroundContext);

    // useEffect(() => {
    //     if (inView) {
    //         setBackground('blackBG');
    //     }
    // }, [inView, setBackground]);

    return (
        <div className="HashHero">
            {/* <h6 className="titlesponsor">Title Sponsor Name</h6> */}
            <ScrollBanner></ScrollBanner>
            <div className="dateSponsorSection">.sponsorSection</div>
            <img src={HashLogo} className="logo"></img>
            <br />
            <div className="taglinecontainer">
                <h3 className="tagline">
                    Trancend <span className="bold"> Reality</span>
                </h3>
                {/* <div className="datecontainer">
                        <h3 className="tagline">
                            <span className="youthfulYellowFG">5 - 6</span>
                            <span>
                                <br />
                                Nov
                            </span>
                        </h3>
                    </div> */}
                <HUIButton
                    text="Grab Tickets"
                    icon="go"
                    event="hash"
                    type="primary"
                    variant="2"
                    color="var(--beurocratic-blue)"
                    // link="https://www.rebrand.ly/define_sponsorguide"
                ></HUIButton>
            </div>

            <br />
        </div>
    );
}

export default HashHero;

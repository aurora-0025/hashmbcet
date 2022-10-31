import LightBulbImage from './../../assets/images/defineLightBulbVideo.gif';
import { BackgroundContext } from '../../App';
import { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import HashLogo from './../../assets/images/HashWordmark.svg';
import BackgroundImage from './../../assets/images/HashHeroBackground.png';
import './hero.css';
import HUIButton from '../../components/button/button';
import ScrollBanner from '../../components/scrollBanner/scrollBanner';
import HashCam from './../../assets/images/HashCam.png';
import { ReactComponent as WerbLogo } from './../../assets/images/sponsors/werb.svg';

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
            <ScrollBanner
                content={
                    <div className="scrollContentInstance">
                        <p>#isHappening</p>
                        <img src={HashCam} className="splitter" alt="" />
                        <p>Competitions - Games - Workshops</p>
                        <img src={HashCam} className="splitter" alt="" />
                    </div>
                }
            ></ScrollBanner>
            {/* <h6 className="titlesponsor">Title Sponsor Name</h6> */}

            <div className="spacer"></div>
            <div className="logoDateSponsor">
                <div className="dateSponsorSection">
                    <div className="sponsorLogo">
                        <WerbLogo className="werbLogo" alt="" />
                    </div>
                    <div className="datecontainer">
                        Nov
                        <div className="datenumbers">
                            <div className="date1">5</div>
                            <div className="date2">6</div>
                        </div>
                    </div>
                </div>
                <br />
                <img src={HashLogo} className="logo" alt="logo"></img>
                <br />
            </div>
            <div className="taglinecontainer">
                <h3 className="tagline">
                    Transcend <span className="bold"> Reality</span>
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

import './scrollBanner.css';
import Marquee from 'react-fast-marquee';

function ScrollBanner(props) {
    return (
        <div id="bannerScroll">
            <div className="scrollContent">
                {props.content}
                {props.content}

            </div>
        </div>
    );
}

export default ScrollBanner;

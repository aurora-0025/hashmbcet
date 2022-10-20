import './scrollBanner.css';

function ScrollBanner(props) {
    return (
        <div id="bannerScroll">
            <div className="scrollContent">{props.content}</div>
        </div>
    );
}

export default ScrollBanner;

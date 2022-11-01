import './../about/about.css';
import './../../index.css';
import HashAudience from './../../assets/images/HashAudience.png';
import React from 'react';
// import { BackgroundContext } from '../hash';
import ImagePill from './components/imagepill';

function HashAbout() {
    return (
        <div className="hashAbout">
            <div className="heroSectionA">
                <h2 className="subheading" style={{ fontWeight: 200 }}>
                    what's up?
                </h2>
                <h2 style={{ color: 'var(--pretty-purple)' }}>#isHappening</h2>
                <br></br>
                <p className="description">
                The department of <b>Computer Science</b> and Engineering of <b>Mar Baselios</b> College of Engineering and Technology invites you to <b>HASH’22</b>, the technical fest with exhilarating competitions, stunning displays of skill and a plethora of cutting edge technologies<br/><br/>
This <b>two-day</b> technical fest is aimed to blow your minds with events such as idea presentation, project expo, 24-hour hackathon and so much more.
                    {/* Lorem ipsum dolor sit amet,<br></br>consectetur{' '}
                    <b>
                        adipiscing elit. Tempor,<br></br> ultrices felis, facilisis tincidunt
                        <br></br> quam.
                    </b>
                    Tristique pellentesque turpis<br></br> mauris, urna sit massa, maecenas.<br></br>
                    <br></br> Risus fermentum ante vulputate <br></br> vulputate<b>viverra id id elementum</b> et.<br></br>
                    Maecenas mattis massa in cursus<br></br> diam quis pellentesque enim. */}
                </p>
            </div>
            <div className="heroSectionB">
                <div className="marqeeWrapper">
                    <div className="heroImageMarqeeCol1">
                        <ImagePill src={HashAudience}/>
                        <ImagePill src={HashAudience}/>
                    </div>
                    <div className="heroImageMarqeeCol2">
                        <ImagePill src={HashAudience}/>
                        <ImagePill src={HashAudience}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HashAbout;

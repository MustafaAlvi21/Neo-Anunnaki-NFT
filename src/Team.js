import React from "react";

import nft1 from "./11.png";
import nft2 from "./355.png";
import nft3 from "./656.png";

export default () => {

    return(

        <>
        
            <div className="team-block" id="team">

                <h2>Team</h2>

                <div className="row container clearfix">
                    
                    <div className="team-block-info col-lg-4 col-md-6 col-sm-12" >
                        <div className="inner-box">
                            <img src={nft1} alt="" title="" />
                            <div className="lower-box">
                                <h3>MrBlueChips</h3>
                                <p>Creator, Co-Founder, CEO, Project leader, Artist</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-block-info col-lg-4 col-md-6 col-sm-12" >
                        <div className="inner-box">
                            <img src={nft2} alt="" title="" />
                            <div className="lower-box">
                                <h3>Fungible Dude</h3>
                                <p>Co-Founder, Managing Director, Project Strategist</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-block-info col-lg-4 col-md-6 col-sm-12" >
                        <div className="inner-box">
                            <img src={nft3} alt="" title="" />
                            <div className="lower-box">
                                <h3>NicolaKay383</h3>
                                <p>Community manager, Marketing Director, Team Spokesperson</p>
                            </div>
                        </div>
                    </div>

                    <div className="team-block-info col-lg-4 col-md-6 col-sm-12" >
                        <div className="inner-box">
                            <img src={nft1} alt="" title="" />
                            <div className="lower-box">
                                <h3>Blkwolfgang</h3>
                                <p>Head Discord Moderator</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-block-info col-lg-4 col-md-6 col-sm-12" >
                        <div className="inner-box">
                            <img src={nft2} alt="" title="" />
                            <div className="lower-box">
                                <h3>Max Parata</h3>
                                <p>Lead Voxel/3D Artist</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-block-info col-lg-4 col-md-6 col-sm-12" >
                        <div className="inner-box">
                            <img src={nft3} alt="" title="" />
                            <div className="lower-box">
                                <h3>Krakonner_</h3>
                                <p>Pixel Artist</p>
                            </div>
                        </div>
                    </div>

                    <div className="team-block-info col-lg-4 col-md-6 col-sm-12" >
                        <div className="inner-box">
                            <img src={nft1} alt="" title="" />
                            <div className="lower-box">
                                <h3>Ansimuz</h3>
                                <p>Pixel Artist</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-block-info col-lg-4 col-md-6 col-sm-12" >
                        <div className="inner-box">
                            <img src={nft2} alt="" title="" />
                            <div className="lower-box">
                                <h3>NuMa</h3>
                                <p>Sodivdity Dev, Front-end Dev</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-block-info col-lg-4 col-md-6 col-sm-12" >
                        <div className="inner-box">
                            <img src={nft3} alt="" title="" />
                            <div className="lower-box">
                                <h3>Bilquees</h3>
                                <p>Sodivdity Dev</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        
        </>

    );

}
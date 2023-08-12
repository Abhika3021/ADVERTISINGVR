import React from 'react'
import Diversity2Icon from '@mui/icons-material/Diversity2';
import AccessTimeFilledSharpIcon from '@mui/icons-material/AccessTimeFilledSharp';
import HubTwoToneIcon from '@mui/icons-material/HubTwoTone';
import MediationIcon from '@mui/icons-material/Mediation';
import BusinessIcon from '@mui/icons-material/Business';
import {HiLightBulb} from 'react-icons/hi'
import {GrTechnology} from 'react-icons/gr'
import ScannerIcon from '@mui/icons-material/Scanner';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import TipsAndUpdatesTwoToneIcon from '@mui/icons-material/TipsAndUpdatesTwoTone';
const Brand = () => {
    return (
        <>
            <div className="why">
                <div className="whyInner container-fluid">
                    <div className='whyHead'>
                        <div className='whyHeadTitle'>
                            <h2 class="whyTitle">
                                Why <span>Brands</span> think <span>COLOURX</span> provides best Advertising solutions
                            </h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="whyList col-md-6">
                            <div class="whyListItem">
                                <TipsAndUpdatesTwoToneIcon className='brand-icon'/>
                                <div class="whyListItemTitle">Creativity!</div>
                                <div class="whyListItemBody">
                                    Our talented designers create eye-catching ad campaigns that leave a lasting impact.
                                </div>
                            </div>
                            <div class="whyListItem">
                                <ScannerIcon className='brand-icon' />
                                <div class="whyListItemTitle">State of the art Technology!</div>
                                <div class="whyListItemBody">
                                    Cutting-edge printing equipment ensures high-quality advertising materials.

                                </div>
                            </div>
                            <div class="whyListItem">
                                <Diversity2Icon className='brand-icon'/>
                                <div class="whyListItemTitle">Professional Team!</div>
                                <div class="whyListItemBody">
                                    Our dedicated professionals deliver seamless experiences from concept to execution.

                                </div>
                            </div>
                        </div>
                        <div className="whyList col-md-6">
                            <div class="whyListItem">
                                <AccessTimeFilledSharpIcon className='brand-icon'/>
                                <div class="whyListItemTitle">Timely Delivery!</div>
                                <div class="whyListItemBody">
                                    We meet deadlines without compromising on quality.
                                </div>
                            </div>
                            <div class="whyListItem">
                                <HubTwoToneIcon className='brand-icon'/>
                                <div class="whyListItemTitle">Client-Centric Approach!</div>
                                <div class="whyListItemBody">
                                    We understand your brand, audience, and goals to deliver tailor-made solutions.
                                </div>
                            </div>
                            <div class="whyListItem">
                                <MonetizationOnOutlinedIcon className='brand-icon'/>
                                <div class="whyListItemTitle">Cost-Effective Solutions!</div>
                                <div class="whyListItemBody">
                                    Great advertising at competitive prices, accessible to businesses of all sizes.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Brand
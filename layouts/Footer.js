import {FadeInSection} from "./FadeInSection";

export default function Footer({pageData}) {

    return(
        <FadeInSection>
            <footer className="diagonal-section-top diagonal-section-top--flip-x" style={{backgroundColor: '#333333'}}>
                <div className='container' style={{paddingTop: 150+'px', paddingBottom: 150+'px'}}>
                    <div className="container-fluid footer-box-container">
                        <div className="footer-card-box">
                            <img src='http://www2.emmerson.pl/emmerson_finanse.gif' alt='Emmerson Finanse S.A.'/><br/><br/>
                            Emmerson Finanse S.A.<br/>
                            Zgrupowania AK "Kampinos" 2,<br/>
                            01-943 Warszawa<br/>
                        </div>
                        <div className="footer-card-box">

                        </div>
                        <div className="footer-card-box" style={{paddingRight: 50+'px'}}>
                            <ul>

                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </FadeInSection>
    )

}
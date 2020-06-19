import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import {useState} from "react";
import GoogleMaps from "../layouts/GoogleMaps";
import {FadeInSection} from "../layouts/FadeInSection";
import {Contact} from "../forms/Contact";

export const ContactBox = () => {
    const style = {
        box:{
            width: 'calc(100%/2 - 25px)',
            fallBacks: [
                { width: '-moz-calc(100%/2 - 25px)' },
                { width: '-webkit-calc(100%/2 - 25px)' },
                { width: '-o-calc(100%/2 - 25px)' }
            ],
            height: 'auto',
            backgroundColor: '#f7f7f7',
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            marginTop: 25+'px',
            marginRight: 25+'px'
        }
    }
    return(
        <div style={{display: "flex", flexFlow: "row", flexWrap: "wrap", justifyContent: "left", }}>
            <div style={style.box}>
                <img src='/img/contact-address-1.png' alt='Adress'/>
                <h5>Zgrupowania AK "Kampinos" 2,<br/>
                    01-943 Warszawa</h5>
            </div>
            <div style={style.box}>
                <img src='/img/contact-phone.png' alt='Adress'/>
                <h5>+48 516 000 999</h5>
            </div>
            <div style={style.box}>
                <img src='/img/contact-email.png' alt='Adress'/>
                <h5>kontakt@emmerson-finanse.pl</h5>
            </div>
            <div style={style.box}>
                <img src='/img/contact-clock.png' alt='Adress'/>
                <h5>9-18<br/>pon-pt</h5>
            </div>
        </div>
    )
}

export const Content = () =>{

    return(
        <div className="container" style={{marginTop: 50+'px', marginBottom: 100+'px'}}>
            <div className="row" >
                <FadeInSection className="col-12 col-sm-12 col-md-12 col-lg-6" style={{marginTop: 50+'px'}}>
                <div style={{display: "flex", flexFlow: 'column'}}>
                    <h3>Emmerson Finanse S.A.</h3>
                    <ContactBox />

                    <h4 style={{marginTop: 50+'px', borderLeft: '4px solid #e0001a', paddingLeft: 25+'px'}}>Oddział Krakowski</h4>
                    <div style={{display: "flex", flexFlow: "row"}}>
                        <i className="fas fa-map-marker-alt"/>
                        <p style={{fontSize: 1.3+'rem', marginLeft: 25+'px', lineHeight: 1.2+'em'}}>
                            Wodna 2d,<br/>
                            30-556 Kraków
                        </p>
                    </div>
                    <div style={{display: "flex", flexFlow: "row"}}>
                        <i className="fas fa-phone-alt"/>
                        <p style={{fontSize: 1.3+'rem', marginLeft: 25+'px', lineHeight: 1.2+'em'}}>
                            <a
                                href='tel:+48 516 000 999'
                                style={{textDecoration: "none", color: "black"}}
                            >
                                +48 516 000 999
                            </a>
                        </p>
                    </div>
                    <div style={{display: "flex", flexFlow: "row"}}>
                        <i className="fas fa-envelope-open"/>
                        <p style={{fontSize: 1.3+'rem', marginLeft: 25+'px', lineHeight: 1.2+'em'}}>
                            <a href='mailto:kontakt@emmerson-finanse.pl'
                                style={{textDecoration: "none", color: "black"}}
                            >krakow@emmerson-finanse.pl</a>
                        </p>
                    </div>
                </div>
                </FadeInSection>
                <FadeInSection className="col-12 col-sm-12 col-md-12 col-lg-6" style={{marginTop: 50+'px'}}>
                    <Contact />
                </FadeInSection>

                <FadeInSection className="col-12" style={{marginTop: 50+'px'}}>
                    <GoogleMaps />
                </FadeInSection>
            </div>
        </div>
    )
}



export default function ContactPage() {
    const [pageData, setPageData] = useState();

    return(
        <div>
            <Header setPageData={setPageData} pageData={pageData}/>

                <Content />

            <Footer pageData={pageData} />
        </div>
    )
}
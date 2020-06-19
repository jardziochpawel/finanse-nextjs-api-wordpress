import Header from '../layouts/Header'
import {Button, Container} from "react-bootstrap";
import {Contact} from "../forms/Contact";
import {useWindowSize} from "../layouts/Resize";
import Image from "react-bootstrap/Image";
import Calculator from "../layouts/calculator";
import Footer from "../layouts/Footer";
import {useState} from "react";
import {FadeInSection} from "../layouts/FadeInSection";

export default function Home() {
    const [pageData, setPageData] = useState([]);

    const size = useWindowSize();
    const style = {
        root:{
            display: 'flex',
            flexFlow: 'row',
            justifyContent: 'between',
            alignItems: 'flex-end',
            flexWrap: "wrap-reverse"
        },
        offer: {
            display: 'flex',
            flexFlow: 'column',
            flexWrap: 'wrap',
            textAlign: 'center',
            fontWeight: 600
        },
        infoHeader: {
            marginTop: 7+'%',
            paddingLeft: 25+'px',
            display: 'flex',
            flexFlow: "column"
        },
        h3: {
            fontFamily: 'Anton, sans-serif',
            fontSize: 25+'px',
            lineHeight: 1.4,
            marginTop: 0,
            marginBottom: 20+'px',
            fontWeight: 300,
        },
        span:{
            letterSpacing: 'normal',
            paddingTop: 20+'px',
            font: '16px/2 open-sans, sans-serif',
            fontWeight: 400,
            paddingLeft: 30+'px'
        },
        colorSpan:{
            color: '#e0001a'
        },
        headerBackground:{
            backgroundImage: "url('/img/bg_header.png')",
            backgroundPosition: "30% 10%",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: 100+'%',
            height: 100+'vh',
            minHeight: 751+'px'
        }
    }
    return (
    <>
        <div style={style.headerBackground}>
            <Header setPageData={setPageData} size={size}/>
            <Container>
                <div style={style.infoHeader}>
                    <h3 style={style.h3}>Pomożemy sfinansować <br/> Twoją nieruchomość</h3>
                    <span style={style.span}>
                    Potrzebujesz <span style={style.colorSpan}>kredytu</span> na zakup nieruchomości?<br/>
                    Porównamy dla Ciebie oferty <span style={style.colorSpan}>20 banków</span>.
                </span>
                    <Button size='lg' href='/oferta' type='button' variant='outline-fin'>
                        Więcej
                    </Button>
                </div>
            </Container>
        </div>
         <div className="offer-section">
            <Container>
                <div style={style.root}>
                    <FadeInSection className='col-12 col-sm-12 col-md-6' style={{marginTop: 100+'px'}}>
                        <div className="col-12" style={style.offer}>
                            <h3 style={{textDecoration: 'underline'}}>Oferujemy</h3>
                            <Image src="/img/1-01.svg" fluid />
                            <span>Pomoc w wyborze <span className='text-danger'>najkorzystniejszej</span> oferty</span>
                            <Image src="/img/2-01.svg" fluid />
                            <span>Wybór <span className='text-danger'>najdogodniejszego</span> systemu rat oraz waluty</span>
                            <Image src="/img/3-01.svg" fluid />
                            <span>Świadomo <span className='text-danger'>zaplanowanie</span> okresu kredytu</span>
                            <Image src="/img/4-01.svg" fluid />
                            <span>Pomoc w <span className='text-danger'>skompletowaniu</span> wszystkich dokumentów</span>
                            <Image src="/img/5-01.svg" fluid />
                            <span><span className='text-danger'>Negocjacje</span> indywidualnych warunków w bankach</span>
                            <Image src="/img/6-01.svg" fluid />
                            <span><span className='text-danger'>kontrolę</span> nad całym procesem kredytowania</span>
                        </div>
                    </FadeInSection>
                    <FadeInSection  className='col-12 col-sm-12 col-md-6' style={{marginTop: 100+'px'}}>
                        <div className="col-12" style={{height: 100+'%', textAlign: 'center', backgroundColor: '#ffffff', padding: 10+'px'}}>
                            <h3>Napisz do nas</h3>
                            <Contact size={size}/>
                        </div>
                    </FadeInSection>
                </div>
            </Container>
        </div>
        <FadeInSection>
            <div style={{background: 'linear-gradient(to bottom, #f7f7f7 50%, #ffffff 50%)', paddingBottom: 150+'px'}} className='mask'>
                <section className="diagonal-section diagonal-section--flip-x"
                         style={{
                             backgroundImage: "url('/img/bg_section.jpg')",
                             backgroundSize: 'cover',
                             backgroundPosition: 'top'
                         }}
                >
                    <div className="container" style={{paddingTop: 200+'px', paddingBottom: 200+'px', color: 'white', position: 'relative', zIndex: 111}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque molestias placeat rem rerum ut veniam. Aut blanditiis dolor eos incidunt molestias, nesciunt ut. Ab aut facilis laborum quibusdam vitae voluptatem?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque molestias placeat rem rerum ut veniam. Aut blanditiis dolor eos incidunt molestias, nesciunt ut. Ab aut facilis laborum quibusdam vitae voluptatem?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque molestias placeat rem rerum ut veniam. Aut blanditiis dolor eos incidunt molestias, nesciunt ut. Ab aut facilis laborum quibusdam vitae voluptatem?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque molestias placeat rem rerum ut veniam. Aut blanditiis dolor eos incidunt molestias, nesciunt ut. Ab aut facilis laborum quibusdam vitae voluptatem?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque molestias placeat rem rerum ut veniam. Aut blanditiis dolor eos incidunt molestias, nesciunt ut. Ab aut facilis laborum quibusdam vitae voluptatem?
                    </div>

                    <div className="layer"/>
                </section>
            </div>
        </FadeInSection>
        <FadeInSection style={{paddingBottom: 150+'px'}}>
            <Calculator/>
        </FadeInSection>
        <Footer pageData={pageData}/>
    </>
  )
}

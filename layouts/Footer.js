import {FadeInSection} from "./FadeInSection";
import Link from "next/link";
import {Image} from "react-bootstrap";

export default function Footer({pageData}) {
    const style = {
        href: {
            textDecoration: 'none',
            color: 'white'
        }
    }
    return(
        <FadeInSection>
            <footer className="diagonal-section-top diagonal-section-top--flip-x" style={{backgroundColor: '#333333'}}>
                <div className='container' style={{paddingTop: 150+'px', paddingBottom: 150+'px'}}>
                    <div className="container-fluid footer-box-container">
                        <div className="footer-card-box">
                            <Image src='/img/emmerson_finanse.gif' alt='Emmerson Finanse S.A.'/><br/><br/>
                            Emmerson Finanse S.A.<br/>
                            Zgrupowania AK "Kampinos" 2,<br/>
                            01-943 Warszawa<br/>
                        </div>
                        <div className="footer-card-box" style={{
                            display: 'flex',
                            flexFlow: 'column'
                        }}>
                            <div style={{
                                display: 'flex',
                                flexFlow: 'row'
                            }}>
                                <i aria-hidden className='fas fa-envelope'/>
                                <a href='mailto:kontakt@emmerson-finanse.pl' style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                    marginLeft: 25+'px'
                                }}>kontakt@emmerson-finanse.pl</a>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexFlow: 'row',
                                marginTop: 25+'px'
                            }}>
                                <i aria-hidden className='fas fa-phone-alt'/>
                                    <a href='tel:+48516000999' style={{
                                        textDecoration: 'none',
                                        color: 'white',
                                        marginLeft: 25+'px'
                                    }}>+48 516 000 999</a>
                            </div>
                        </div>
                        <div className="footer-card-box" style={{paddingRight: 50+'px'}}>
                            <ul>
                                {pageData?.items?.map((p,index)=>{
                                    if(p.child_items){
                                        return p.child_items.map((c, index)=>(
                                            <Link href={{pathname: '/page/'+c.slug}} key={index}>
                                                <a title={c.slug} style={style.href}>
                                                    <li>{c.title}</li>
                                                </a>
                                            </Link>
                                        ))
                                    }
                                    else{
                                        return(
                                            <Link href={{pathname: '/page/'+p.slug}} key={index}>
                                                <a title={p.slug} style={style.href}>
                                                    <li>{p.title}</li>
                                                </a>
                                            </Link>
                                        )
                                    }
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </FadeInSection>
    )

}
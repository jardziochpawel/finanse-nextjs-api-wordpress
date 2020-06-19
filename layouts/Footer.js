import {FadeInSection} from "./FadeInSection";
import Link from "next/link";

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
                            <img src='http://www2.emmerson.pl/emmerson_finanse.gif' alt='Emmerson Finanse S.A.'/><br/><br/>
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
                                <i className='fas fa-envelope'/>
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
                                <i className='fas fa-phone-alt'/>
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
                                            <Link href={{pathname: c.slug}}>
                                                <a title={c.slug} style={style.href}>
                                                    <li key={index}>{c.title}</li>
                                                </a>
                                            </Link>
                                        ))
                                    }
                                    else{
                                        return(
                                            <Link href={{pathname: p.slug}}>
                                                <a title={p.slug} style={style.href}>
                                                    <li key={index}>{p.title}</li>
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
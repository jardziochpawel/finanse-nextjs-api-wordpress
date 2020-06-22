import Head from "next/head";
import {Navbar, Nav, Container, Image, NavDropdown} from "react-bootstrap";
import fetch from 'isomorphic-unfetch';
import {useEffect, useState} from "react";

export const Menu = ({pages}) => {

    return(
        <>
            {pages.items?.map((page, index)=>{
                if(page.child_items){
                    return(
                        <NavDropdown title={page.title} id='main-menu-dropdown' key={index}>
                            {page.child_items.map((child, index)=>(
                                <NavDropdown.Item key={index} href={'/page/'+child.slug} className='nav-link-fin'>{child.title}</NavDropdown.Item>
                            ))}
                        </NavDropdown>

                )
                }
                if(page.slug === 'kontakt'){

                    console.log(page.slug);
                    return(
                        <Nav.Link key={index} href={'/'+page.slug} className='nav-link-fin'>{page.title}</Nav.Link>
                    )
                }
                return(
                    <Nav.Link key={index} href={'/page/'+page.slug} className='nav-link-fin'>{page.title}</Nav.Link>
                )
            }
        )}
        </>
    )
}


export default function Header({setPageData, pageData}) {

    const style = {
        navBar: {
            backgroundColor: '#e0001a',
            webkitBoxShadow: '0px 20px 55px 2px rgba(0,0,0,0.5)',
            mozBoxShadow: '0px 20px 55px 2px rgba(0,0,0,0.5)',
            boxShadow: '0px 20px 55px 2px rgba(0,0,0,0.5)',
        }
    }
    const [pages, setPages] = useState([]);

    useEffect(() => {
        async function loadData() {
            const response = await fetch('https://api.emmerson-finanse.pl/wp-json/menus/v1/menus/menu');
            const pagesData = await response.json();
            setPageData(pagesData);
            setPages(pagesData);
        }

        if(!pageData) {
            loadData();
        }
    }, []);

    return(
        <>
            <Head>
                <title>Emmerson Finanse S.A.</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:300&subset=latin-ext" rel="stylesheet"/>
                <link href='/style.css' rel="stylesheet" />
                <script src="https://kit.fontawesome.com/d88afa1ad5.js" crossOrigin="anonymous"></script>
            </Head>

            <Container>
                <Navbar expand="lg" style={style.navBar} variant='dark' sticky='top' fixed='top'>
                    <Navbar.Brand href="/"><Image src={'http://www2.emmerson.pl/emmerson_finanse.gif'}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="ml-auto">
                            { pages &&
                                <Menu pages={pages} />
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </>
    );
}
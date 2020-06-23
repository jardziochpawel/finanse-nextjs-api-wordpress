import { useRouter } from 'next/router';
import {useEffect, useState} from "react";
import fetch from "isomorphic-unfetch";
import Spinner from "react-bootstrap/Spinner";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import {FadeInSection} from "../../layouts/FadeInSection";

function Slug({ pageData }) {

    const router = useRouter();

    const [page, setPage] = useState(pageData);
    const [data, setPageData] = useState([]);

    useEffect(() => {
        async function loadData() {
            const response = await fetch('https://api.emmerson-finanse.pl/wp-json/wp/v2/pages?slug='+router.query.slug);
            const pageData = await response.json();

            setPage(pageData);
        }

        if(!pageData) {
            loadData();
        }
    }, []);

    if(!page){
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        );
    }

    const RenderContent = (onePage) => {
         return (<div dangerouslySetInnerHTML={{ __html:onePage}}/>)
    }

    return (
        <div style={{minHeight: 100+'vh'}}>
            <Header setPageData={setPageData} pageData={pageData}/>
            <FadeInSection>
                <div className="container" style={{marginTop: 100+'px'}}>
                    <div className="container-fluid" style={{fontSize: 1.2+'rem'}}>
                        {page && RenderContent(page[0]?.content.rendered) }
                    </div>
                </div>
            </FadeInSection>
            <Footer pageData={data}/>
        </div>
    )
}

Slug.getInitialProps = async (ctx) => {
    const {query} = ctx;

    if(!ctx.req){
        return {
            props: {
                pageData: [],
            },
        }
    }

    const res = await fetch('https://api.emmerson-finanse.pl/wp-json/wp/v2/pages?slug='+query.slug)
    const pageData = await res.json()

    return {
        props: {
            pageData,
        },
    }
}

export default Slug
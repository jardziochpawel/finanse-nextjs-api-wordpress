import {Container} from "react-bootstrap";
import {useState} from 'react'
import {FormCalculate} from "../forms/FormCalculate";
import {FadeInSection} from "./FadeInSection";

export default function Calculator() {
    const [value, setValues] = useState({range: 360, ltv: 10, price: 0});
    const style = {
        paragraph: {
            padding: 10+'px',
            display: 'flex',
            flexFlow: 'row',
            width: 300+'px',
            justifyContent: 'between',
            alignItems: 'center',
            fontSize: 1.1+'rem'
        },
        list:{
            width: 50+'px',
            height: 50+'px',
            minWidth: 50+'px',
            minHeight: 50+'px',
            borderRadius: 25+'px',
            border: '1px solid #e0001a',
            backgroundColor: '#e0001a',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 2+'rem',
            color: '#ffffff',
            marginRight: 20+'px'
        }
    }

    const ResultCalculate = (props) => {
        const {price, range, ltv, annual} = props.props;

        const calculate = (price, range, ltv, annual) => {

            let principal = price - (price * (ltv/100));
            let interest = parseFloat(annual) / 100 / 12;
            let payments = parseFloat(range);

            let x = Math.pow(1 + interest, payments); //Math.pow computes powers
            let monthly = (principal*x*interest)/(x-1);
            let Q = 0;
            if (isFinite(monthly)) {
                // Fill in the output fields, rounding to 2 decimal places
                Q = monthly.toFixed(2);
            }

            return Q;
        }

        const R = calculate(price, range, ltv, annual);

        return(
            <div className='row'>
                <div className="resultCard cardGreen">
                    <div className="resultContent">
                        Rata:
                        <h1>{R} zł</h1>
                    </div>
                </div>
                <div className="resultCard cardBlue">
                    <div className="resultContent">
                        Całkowity kwota do spłaty:
                        <h1>{(R*range).toFixed(0)} zł</h1>
                    </div>
                </div>
                <div className="resultCard cardDarkBlue">
                    <div className="resultContent">
                        Koszt kredytu:
                        <h1>{((R*range)-(price-(price * (ltv/100)))).toFixed(0)} zł</h1>
                    </div>
                </div>
            </div>
        );
    }

    return(
        <div style={{width: 100+'%', backgroundColor: 'white'}}>
            <h3 style={{textAlign: "center"}}>Oblicz ratę kredytu</h3>
            <Container>
                <div className="row">
                    <FadeInSection className='col-12 col-sm-12 col-md-6' >
                        <div style={{
                            display: 'flex',
                            flexFlow: 'column',
                            height: 200+'px',
                            width: 100+'%',
                            justifyContent: 'center',
                            marginRight: 20+'px',
                            paddingBottom: 200+'px',
                            paddingTop: 200+'px'
                        }}>
                            <div style={style.paragraph}><div style={style.list}>1</div> Wprowadź kwotę kredytu</div>
                            <div style={style.paragraph}><div style={style.list}>2</div> Wprowadź wkład własny</div>
                            <div style={style.paragraph}><div style={style.list}>3</div> Wybierz okres kredytowania</div>
                            <div style={style.paragraph}><div style={style.list}>4</div> Napisz do nas, znajdziemy dla Ciebie najlepsze rozwiązanie</div>
                        </div>
                    </FadeInSection>
                    <FadeInSection className='col-12 col-sm-12 col-md-6' style={{paddingBottom: 50+'px'}}>
                        <FormCalculate setValues={setValues}/>
                    </FadeInSection>
                </div>
            </Container>
            <Container>
                <FadeInSection className='col-12'>
                    <ResultCalculate props={value}/>
                </FadeInSection>
            </Container>
        </div>
    )
}
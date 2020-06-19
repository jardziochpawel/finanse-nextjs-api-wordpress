import {useEffect, useState, memo} from "react";
import {useForm} from "react-hook-form";
import {Button, Form, InputGroup} from "react-bootstrap";

export const FormCalculate = memo(function FormCalculate (props) {
    const [range, setRange] = useState(360);
    const [price, setPrice] = useState(300000);
    const [ltv, setLtv] = useState(10);
    const [annual, setAnnual] = useState(3.8);
    const {setValues} = props;

    useEffect(()=>{

    },[
        range, price, ltv, annual
    ])

    const {register} = useForm();

    const validRange = (value) => {
        let number = 0;
        if(!isNaN(parseInt(value))){
            number = parseInt(value);
            if(number > 480)
                number = 480;
        }

        if(value === '' || value === undefined)
            number = '';

        return number;

    }

    const validLtv = (value) => {
        let number = 10;
        if(!isNaN(parseInt(value))) {
            if( parseInt(value) > 100 )
                number = 100;
            number = parseInt(value);
        }

        if(value === '' || value === undefined)
            number = '';

        if(value === 1){
            number = '';
        }

        return number;
    }

    const validPrice = (value) => {
        let number = 0;
        if(!isNaN(parseInt(value))) {
            number = parseInt(value);
        }

        if(value === '' || value === undefined)
            number = '';

        return number;
    }

    const validAnnual = (value) => {

        return value;
    }

    return(
        <Form style={{width: 100+'%'}}>
            <Form.Row style={{width: 100+'%'}}>
                <Form.Group controlId="price-of-estate"  style={{width: 100+'%'}}>
                    <Form.Label>Kwota kredytu</Form.Label>
                    <Form.Control
                        type='text'
                        name='price-of-estate'
                        ref={register({
                            max: 420,
                            min: 0
                        })}
                        value={price}
                        onChange={(e)=>
                            setPrice(validPrice(e.target.value))}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row style={{width: 100+'%'}}>
                <Form.Group controlId="annual-of-loan"  style={{width: 100+'%'}}>
                    <Form.Label>Oprocentowanie</Form.Label>
                    <InputGroup>
                    <Form.Control
                        type='number'
                        name='annual-of-loan'
                        ref={register({
                            max: 10,
                            min: 0
                        })}
                        value={annual}
                        onChange={(e)=>
                            setAnnual(validAnnual(e.target.value))}
                    />
                        <InputGroup.Append>
                            <InputGroup.Text id="annual-text">%</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
            </Form.Row>
            <Form.Row style={{width: 100+'%'}}>
                <Form.Group controlId="ltv"  style={{width: 100+'%'}}>
                    <Form.Label>Wkład własny</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type='text'
                            name='ltv'
                            ref={register({
                                max: 100 ,
                                min: 10
                            })}
                            value={ltv}
                            onChange={(e)=> setLtv(validLtv(e.target.value))}
                        />
                        <InputGroup.Append>
                            <InputGroup.Text id="ltv-text">%</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                    <small>Wkład własny wartość procentowa 10-100%</small>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Label>Okres Kredytowania</Form.Label>
                <Form.Group controlId="length-of-loan"  style={{width: 100+'%', display: 'flex', flexFlow: 'row'}}>
                    <Button
                        type='button'
                        variant='outline-dark'
                        onClick={() =>
                            setRange(range > 0 ? range -1 : 0)}
                    >
                        <i className='fas fa-minus'/>
                    </Button>
                    <Form.Control
                        type='text'
                        name='length-of-loan'
                        value={range}
                        ref={register({
                            max: 420,
                            min: 0
                        })}
                        onChange={(event)=>
                            setRange(validRange(event.target.value))
                        }
                    />
                    <Button
                        type='button'
                        variant='outline-dark'
                        onClick={() => setRange(range < 420 ? range + 1 : 420)}
                    >
                        <i className='fas fa-plus'/>
                    </Button>

                </Form.Group>
            </Form.Row>
            <Form.Row style={{width: 100+'%'}}>
                <Form.Group controlId="range-of-loan"  style={{width: 100+'%'}}>
                    <Form.Control
                        name='range-of-loan'
                        type="range"
                        value={range}
                        onChange={(event)=>setRange(parseInt(event.target.value))}
                        min={0}
                        max={420}
                    />
                </Form.Group>
            </Form.Row>
            <Button type='button' variant='danger' size='lg' style={{width: 100+'%', marginTop: 20+'px'}} onClick={()=>setValues({price:price, range:range, ltv:ltv, annual:annual})}>Oblicz</Button>
        </Form>
    );
});
import { useForm } from "react-hook-form";
import {TextArea, TextForm} from "./forms";
import {Form, Button} from "react-bootstrap";
import Link from "next/link";

export const Contact = () => {
    const { handleSubmit, register, errors, formState } = useForm();
    const onSubmit = values => console.log(values);

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{width: 100+'%', padding: 10+'px', textAlign: 'left'}}>
            <Form.Row>
                <TextForm
                    id='name'
                    name="name"
                    reference={register({
                        required: "Required"
                    })}
                    require={true}
                    errors={errors}
                    label='Imię'
                    helperText='Podaj Imię'
                    formState={formState}
                />
                <TextForm
                    id='surname'
                    name="surname"
                    reference={register({
                        required: "Required"
                    })}
                    require={true}
                    errors={errors}
                    label='Nazwisko'
                    helperText='Podaj nazwisko'
                    formState={formState}
                />
            </Form.Row>
            <Form.Row>
                <TextForm
                    id='email'
                    name="email"
                    reference={register({
                        required: "Required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Nie poprawny adres e-mail"
                        }
                    })}
                    require={true}
                    errors={errors}
                    label='E-mail'
                    helperText='Podaj adres e-mail'
                    formState={formState}
                />
                <TextForm
                    id='phone'
                    name="phone"
                    reference={register({
                        required: "Required",
                        pattern: {
                            value: /\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?/g,
                            message: "Nie poprawny numer telefonu"
                        }
                    })}
                    require={true}
                    errors={errors}
                    label='Telefon'
                    helperText='Podaj numer telefonu'
                    formState={formState}
                />
            </Form.Row>
            <Form.Row>
                <TextArea id='message'
                          name="message"
                          reference={register({
                              required: "Required"
                          })}
                          require={true}
                          type='textarea'
                          rows={6}
                          errors={errors}
                          label='Wiadomość'
                          helperText='Napisz do nas'
                          formState={formState}/>
            </Form.Row>
            <Link href={{pathname: '/rodo'}} className='text-danger'><a title='RODO'>RODO (klauzula informacyjna)</a></Link>

            <p style={{marginTop: 20+'px', fontSize: 0.6+'rem'}}>
                W rozumieniu Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r.
            w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego
            przepływu takich danych oraz uchylenia dyrektywy 95/46/WE oraz Ustawy o Ochronie Danych Osobowych:
            </p>
            <Form.Group controlId="rodo1" style={{fontSize: 0.6+'rem'}}>
                <Form.Check type="checkbox" label="
                * Wyrażam zgodę, na przetwarzanie moich danych osobowych wymienionych powyżej przez
                EMMERSON FINANSE S.A. w celach marketingowych i handlowych.
                " />
            </Form.Group>
            <Form.Group controlId="rodo2" style={{fontSize: 0.6+'rem'}}>
                <Form.Check type="checkbox" label="
                * Wyrażam zgodę na otrzymywanie informacji handlowej za pomocą środków komunikacji
                elektronicznej w rozumieniu przepisów Ust. z 18.07.2002r. o świadczeniu usług drogą
                elektroniczną od EMMERSON FINANSE S.A.
                " />
            </Form.Group>
            <Form.Group controlId="rodo3" style={{fontSize: 0.6+'rem'}}>
                <Form.Check type="checkbox" label="
                * Wyrażam zgodę na używanie przez EMMERSON FINANSE S.A. telekomunikacyjnych urządzeń końcowych
                (np. telefony, tablety, komputery), których jestem użytkownikiem, dla celów marketingu
                bezpośredniego zgodnie z art. 172 Ust. z 16.07.2004r. Prawo telekomunikacyjne.
                " />
            </Form.Group>





            <Button type='submit' variant='outline-fin' size='lg' style={{width: 100+'%'}}>
                Wyślij
            </Button>
        </form>
    );
};
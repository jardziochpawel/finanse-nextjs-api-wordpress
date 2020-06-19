import {Form} from "react-bootstrap";

export const TextForm = ({id, type, name, label, placeholder, errors, helperText, reference, formState, require}) => {
    const { touched, isSubmitted } = formState;

   return (
        <Form.Group controlId={id} style={{margin: 'auto', width: 48+'%'}}>
            <Form.Label>{label}{require && <span className='text-danger'>*</span>}</Form.Label>
            <Form.Control as={type} placeholder={placeholder} name={name} ref={reference} isInvalid={touched[name] && isSubmitted && errors[name]} isValid={isSubmitted && !errors[name]} />
            {!errors[name] && <Form.Text className="text-muted">
                    {helperText}
                </Form.Text>
            }
            {
                errors[name] && <small className='is-invalid text-danger'>{errors[name].message}</small>
            }
        </Form.Group>
   );
};

export const TextArea = (props) => {
    const {id, type, name, label, placeholder, errors, helperText, reference, formState, rows, require} = props;
    const { touched, isSubmitted } = formState;

    return(
        <Form.Group controlId={id} style={{margin: 'auto', width: 100+'%'}}>
            <Form.Label>{label}{require && <span className='text-danger'>*</span>}</Form.Label>
            <Form.Control as={type} placeholder={placeholder} name={name} ref={reference} isInvalid={touched[name] && isSubmitted && errors[name]} isValid={isSubmitted && !errors[name]} rows={rows} />
            {!errors[name] && <Form.Text className="text-muted">
                {helperText}
            </Form.Text>
            }
            {
                errors[name] && <small className='is-invalid text-danger'>{errors[name].message}</small>
            }
        </Form.Group>
    )
}
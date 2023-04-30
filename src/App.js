import { useState } from 'react';
import {Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from './components/Input';
import Button from './components/Button';
import Container from './components/Container';
import Section from './components/Section';
import Balance from './components/Balance';

const compoundInterest = (deposit, contribution, years, rate) => {
    let total = deposit;
    for (let i = 0; i < years; i++) {
        total = (total + contribution) * (1 + rate);
    }
    return Math.round(total);
}

const formatter= new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
})


function App() {
    const [balance, setBalance] = useState('');
  const handleSubmit = ({deposit, contribution, years, rate}) => {
    const val= compoundInterest(Number(deposit), Number(contribution), Number(years), Number(rate)/100);
    setBalance(formatter.format(val));  
}

  return (
  <Container>
      <Section>
        <Formik
          initialValues={{ 
            deposit: '', 
            contribution: '', 
            years: '' , 
            rate: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            deposit: Yup.number()
                .required('Llene bien el perro formulario >:c')
                .min(0, 'Debe ser mayor a 0')
                .typeError('Debe ser un numero'),
                contribution: Yup.number()
                .required('Llene bien el perro formulario >:c')
                .min(0, 'Debe ser mayor a 0')
                .typeError('Debe ser un numero'),
                years: Yup.number()
                .required('Llene bien el perro formulario >:c')
                .min(0, 'Debe ser mayor a 0')
                .typeError('Que no bergaaa'),
                rate: Yup.number()
                .required('Llene bien el perro formulario >:c')
                .min(0, 'Debe ser mayor a 0')
                .max(100, 'Debe ser menor a 100')
                .typeError('Debe ser un numero'),
          })}
        >
        <Form>
          <Input name='deposit' label='Deposito inicial'/>
          <Input name='contribution' label='Contribucion anual'/>
          <Input name='years' label='Años'/>
          <Input name='rate' label='Interes estimado'/>
          <Button type='submit'>Calcular</Button>
        </Form>
      </Formik>
      {balance !== '' ? <Balance> Balance final: {balance}</Balance> : null}
    </Section>
  </Container>
  );
}

export default App;

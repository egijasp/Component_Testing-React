import './Form.scss';
import {
  ChangeEvent, useEffect, useRef, useState,
} from 'react';
import { FaCcMastercard } from 'react-icons/fa';
import Button from './Button/Button';

const initialFormValues = {
  email: '',
  cardNumber: '',
  expire: '',
  cvc: '',
  name: '',
  country: 'default',
};

const Form = () => {
  const [formValue, setFormValue] = useState(initialFormValues);
  const emailInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    emailInput.current?.focus();
  }, [formValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormValue({ ...formValue, [e.target.name]: value });
  };

  const submitHandler = () => {
    setFormValue(initialFormValues);
  };

  return (
    <div className="form__container">
      <h1>Buy Teddy Bear</h1>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}

      >
        <label
          htmlFor="email"
          className="form__label"
        >
          Email
          <br />
          <input
            id="email"
            ref={emailInput}
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            value={formValue.email}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <div className="form__cardNumber-wrapper">
          <label
            className="form__label"
            htmlFor="cardNumber"
          >
            Card information
            <br />
            <input
              className="input"
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formValue.cardNumber}
              placeholder="0000 0000 0000 0000"
              onChange={(e) => {
                setFormValue({
                  ...formValue,
                  cardNumber: e.target.value,
                });
              }}
            />
          </label>
          <FaCcMastercard
            className="form__input-icon"
          />
        </div>
        <div className="input__wrapper">
          <input
            className="input input-small"
            placeholder="MM/YY"
            id="expire"
            name="expire"
            value={formValue.expire}
            onChange={(e) => {
              setFormValue({
                ...formValue,
                expire: e.target.value,
              });
            }}
          />
          <input
            className="input input-small right"
            placeholder="CVC"
            id="cvc"
            type="text"
            name="cvc"
            value={formValue.cvc}
            onChange={(e) => {
              setFormValue({
                ...formValue,
                cvc: e.target.value,
              });
            }}
          />
        </div>
        <label
          htmlFor="name"
          className="form__label"
        >
          Name on card
          <br />
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formValue.name}
            onChange={(e) => {
              setFormValue({
                ...formValue,
                name: e.target.value,
              });
            }}
          />
        </label>
        <label
          htmlFor="country"
          className="form__label"
        >
          Country or region
          <br />
          <select
            className="input"
            id="country"
            name="country"
            placeholder="country"
            value={formValue.country}
            onChange={(e) => {
              setFormValue({
                ...formValue,
                country: e.target.value,
              });
            }}
          >
            <option
              aria-label="Countries"
              value="default"
              disabled
              hidden
            >
              Country
            </option>
            <option aria-label="Countries" value="Austria">Austria</option>
            <option aria-label="Countries" value="Estonia">Estonia</option>
            <option aria-label="Countries" value="Latvia">Latvia</option>
            <option aria-label="Countries" value="Lithuania">Lithuania</option>
            <option aria-label="Countries" value="Poland">Poland</option>
          </select>
        </label>
        <Button
          onClick={submitHandler}
        />
      </form>
    </div>
  );
};

export default Form;

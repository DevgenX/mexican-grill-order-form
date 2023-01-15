import React, { useState } from "react";
import ProteinForm from "./ProteinForm";
import FillingForm from "./FillingForm";
import ToppingForm from "./ToppingForm";
import SideForm from "./SideForm";

const DEFAULT_STATE = {
  protein: [],
  fillings: [],
  toppings: [],
  sides: [],
};

const Form = ({ addOrder }) => {
  const [formState, setFormState] = useState(DEFAULT_STATE);

  const { fillings, protein, sides, toppings } = formState;
  const handleSubmit = (e) => {
    e.preventDefault();
    addOrder(formState);
    setFormState({
      ...DEFAULT_STATE,
    });
    e.target.reset();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (formState[name].includes(value)) {
      setFormState({
        ...formState,
        [name]: formState[name].filter((ingr) => ingr !== value),
      });
    } else {
      setFormState({
        ...formState,
        [name]: formState[name].concat(value),
      });
    }
  };

  return (
    <div className="ui raised container segment">
      <h1 className="ui block header">Order Form</h1>
      <form className="ui form" id="order-form" onSubmit={handleSubmit}>
        <ProteinForm protein={protein} handleOnChange={handleChange} />

        <FillingForm fillings={fillings} handleOnChange={handleChange} />

        <ToppingForm toppings={toppings} handleOnChange={handleChange} />

        <SideForm sides={sides} handleOnChange={handleChange} />

        <br />

        <button className="ui blue big button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

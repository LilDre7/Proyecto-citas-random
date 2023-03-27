import React from "react";
import Button from "./Button";
import "./Styles/ContainerInfo.css";

const ContainerInfo = ({ quote, handleNewQuote }) => {
  return (
    <section className="container__section">
      <h1 className="container__title">Galletas de la fortuna</h1>

      <article className="ContainerInfo__phrase">
        <p>{quote.quote}</p>
        <span className="vector"></span>
      </article>

      <Button className="container__button" handleNewQuote={handleNewQuote} />

      <article className="ContainerInfo__author">
        <h4>Fuerte: {quote.author}</h4>
      </article>
    </section>
  );
};

export default ContainerInfo;

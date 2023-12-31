import Content from "./Content";
import Form from "./Form";
import React from "react";

function ContactContainer() {
  return (
    <main className="px-8 md:px-0 container mx-auto animate__animated animate__fadeIn">
      <Content />
      <Form />
    </main>
  );
}

export default ContactContainer;

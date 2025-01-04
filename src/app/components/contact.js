import React from "react";

function Contact() {
  return (
    <>
      <div>
        <h1 className="text-5xl font-semibold text-center p-4">Contato</h1>
      </div>
      <section className="flex lg:max-w-3xl bg-primary p-4 flex-col rounded-md border border-secondary my-2 fade-in">
        <p>
          <strong>Telefone:</strong> (19) 99505-4678
        </p>
        <p>
          <strong>Email:</strong> klamatheus@hotmail.com
        </p>
      </section>
    </>
  );
}

export default Contact;

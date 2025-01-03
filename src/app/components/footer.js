import React from "react";

function Footer() {
  return (
    <>
      <section className="flex lg:max-w-3xl bg-primary p-4 flex-col md:flex-row rounded-md border border-secondary my-2 items-center fade-in">
        <p>
          2025, Feito com 💙 por{" "}
          <b className="text-blue-400">Matheus Henrique</b> usando Next.Js
        </p>
      </section>
    </>
  );
}

export default Footer;

import React from "react";

function Skills() {
  return (
    <>
      <h1 className="text-4xl font-bold self-center">Competências</h1>
      <section className="flex lg:w-[350px] bg-primary p-2 flex-col md:flex-row rounded-md border border-secondary my-2 items-center fade-in">
        <div className="flex flex-col p-4">
          <ul className="list-disc list-inside mt-4 text-lg">
            <li>
              <strong>Desenvolvimento Web:</strong>
              <p className="ml-6">
                React, Next.js, HTML, CSS, Salesforce Commerce Cloud, Node.js
                (Express), JavaScript e TypeScript.
              </p>
            </li>
            <li>
              <strong>Salesforce:</strong>
              <p className="ml-6">
                FlowBuilder, Apex (Java), customização e automação da plataforma
                Salesforce.
              </p>
            </li>
            <li>
              <strong>Banco de Dados:</strong>
              <p className="ml-6">
                PostgreSQL e armazenamento na nuvem com AWS S3.
              </p>
            </li>
            <li>
              <strong>Metodologias Ágeis:</strong>
              <p className="ml-6">
                Experiência com Scrum e Kanban em equipes multidisciplinares.
              </p>
            </li>
            <li>
              <strong>Controle de Versão:</strong>
              <p className="ml-6">Git e GitHub.</p>
            </li>
            <li>
              <strong>Interpessoal:</strong>
              <p className="ml-6">
                Comunicação eficaz, adaptabilidade e resolução de problemas.
              </p>
            </li>
            <li>
              <strong>Idiomas:</strong>
              <p className="ml-6">Inglês fluente.</p>{" "}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Skills;

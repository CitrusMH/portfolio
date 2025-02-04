import React from "react";
import Image from "next/image";

function About() {
  return (
    <>
      <h1 className="text-4xl font-bold self-center">Sobre Mim</h1>
      <section className="flex bg-primary py-6 px-4 flex-col xl:flex-row rounded-md border border-secondary my-2 items-center md:items-start   fade-in">
        <div className="flex flex-col p-4">
          <p className="text-lg">
            Sou <b className="text-blue-400">Desenvolvedor Web Full-Stack</b>{" "}
            com 2+ anos de experiência na criação de soluções digitais de alto
            desempenho. Especializado em arquiteturas modernas com React,
            Next.js, TypeScript e Salesforce Commerce Cloud, atuo tanto no
            desenvolvimento front-end quanto em integrações back-end complexas,
            garantindo escalabilidade e eficiência operacional.
          </p>
          <p className="text-lg mt-2">Minha expertise inclui:</p>
          <ul className="list-disc">
            <li className="ml-6">
              Integrações customizadas em Salesforce Commerce Cloud (SFCC),
              otimizando processos de e-commerce.
            </li>
            <li className="ml-6">Migração e gestão de assets em AWS S3.</li>
            <li className="ml-6">
              Desenvolvimento de PWAs (Progressive Web Apps) com SFCC PWA Kit,
              elevando a performance de lojas virtuais.
            </li>
          </ul>
          <p className="text-lg mt-2">
            Sou movido pela resolução de desafios técnicos e pela busca
            constante de inovação, sempre alinhando tecnologia às estratégias de
            negócio.
          </p>
          <div className="flex mt-4">
            <a
              href="https://www.linkedin.com/in/matheus-melo-867a84186/"
              className="font-semibold text-blue-400 hover:text-blue-500 mr-4"
              target="_blank"
            >
              <Image
                src="/linkedin.svg"
                width={24}
                height={24}
                alt=""
                className="object-contain"
              />
            </a>
            <a
              href="https://github.com/CitrusMH"
              className="font-semibold text-blue-400 hover:text-blue-500 mr-4"
              target="_blank"
            >
              <Image
                src="/github-mark-white.svg"
                width={24}
                height={24}
                alt=""
                className="object-contain"
              />
            </a>
          </div>
        </div>
        <div className="md:min-w-80 lg:min-w-96 self-center">
          <Image
            src="/images/Imagem.png"
            width={400}
            height={400}
            alt="Foto de perfil"
            className="rounded-lg p-4 w-full"
          />
        </div>
      </section>
    </>
  );
}

export default About;

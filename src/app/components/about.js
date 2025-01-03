import React from "react";
import Image from "next/image";

function About() {
  return (
    <>
      <section className="flex bg-primary py-6 px-4 flex-col md:flex-row rounded-md border border-secondary my-2 items-center md:items-start text-justify fade-in">
        <div className="flex flex-col p-4">
          <h1 className="text-4xl font-bold">Sobre Mim</h1>
          <p className="text-lg">
            Sou <b className="text-blue-400">Desenvolvedor Web Full-Stack</b>{" "}
            com sólida experiência em React, Next.js, JavaScript e TypeScript e
            Salesforce Commerce Cloud.
          </p>
          <p className="text-lg mt-2">
            Atuo no desenvolvimento e manutenção de aplicações robustas, com
            foco em integrações e customizações no back-end da plataforma. Tenho
            conhecimento em armazenamento na nuvem (AWS S3), versionamento com
            Git e entrega de soluções escaláveis.
          </p>
          <p className="text-lg mt-2">
            Valorizo a colaboração em equipes ágeis e busco criar aplicações
            modernas que unem eficiência técnica e impacto nos negócios.
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
            className="rounded-lg p-4"
          />
        </div>
      </section>
    </>
  );
}

export default About;

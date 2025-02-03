import React from "react";
import Image from "next/image";

function About() {
  return (
    <>
      <h1 className="text-4xl font-bold self-center">Sobre Mim</h1>
      <section className="flex bg-primary py-6 px-4 flex-col md:flex-row rounded-md border border-secondary my-2 items-center md:items-start   fade-in">
        <div className="flex flex-col p-4">
          <p className="text-lg">
            Sou <b className="text-blue-400">Desenvolvedor Web Full-Stack</b>{" "}
            com sólida experiência em tecnologias modernas como React, Next.js,
            JavaScript, TypeScript e Salesforce Commerce Cloud. Ao longo da
            minha carreira, tenho me especializado no desenvolvimento e
            manutenção de aplicações web robustas e escaláveis, atendendo às
            necessidades específicas de clientes e empresas em diversos setores.
          </p>
          <p className="text-lg mt-2">
            Minha atuação é marcada pelo foco em integrações complexas e
            customizações eficientes no back-end da plataforma, garantindo a
            entrega de soluções personalizadas que agregam valor aos negócios.
            Também possuo experiência prática com armazenamento em nuvem (AWS
            S3), versionamento de código com Git e práticas de DevOps para
            facilitar a entrega contínua e o desempenho das aplicações.
          </p>
          <p className="text-lg mt-2">
            Sou apaixonado por resolver desafios complexos e por aprender
            constantemente novas tecnologias e práticas, o que me mantém
            atualizado e pronto para enfrentar os cenários em constante evolução
            do desenvolvimento web.
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

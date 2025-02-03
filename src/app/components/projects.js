import React from "react";
import Image from "next/image";

function Projects() {
  const projectData = [
    {
      id: 1,
      title: "Suporte - BeeCloud",
      description:
        "Na BeeCloud, ofereci suporte ao site institucional de um cliente e desenvolvi novas páginas usando Next.js, React e Tailwind CSS. A solução utilizava o CMS Strapi, configurei ambientes de staging no Heroku (incluindo Heroku Postgres) e realizei a migração de assets da Salesforce para o AWS S3.",
      link: "",
      image: "/next.svg",
      tag: "Javascript",
    },
    {
      id: 2,
      title: "Suporte - BeeCloud",
      description:
        "Na BeeCloud, ofereci suporte a um E-Commerce desenvolvido com Salesforce Commerce Cloud. O projeto utiliza o PWA KIT com React no Front-End e o SFRA, baseado em Express.js, no Back-End. Sou responsável por manter o site atualizado e implementar ajustes conforme as necessidades do cliente, abrangendo tanto o Front-End quanto o Back-End.",
      link: "",
      image: "/images/react.webp",
      tag: "Commerce Cloud",
    },
    {
      id: 3,
      title: "POO - Sales Manager",
      description:
        "Projeto desenvolvido para gerenciar produtos, clientes e pedidos em bancos de dados. Utiliza Spring Data para interação com o banco e Thymeleaf para renderização de páginas web, oferecendo uma solução robusta e eficiente para a gestão empresarial.",
      link: "https://github.com/CitrusMH/SalesManager_ProjetoPOO2024",
      image: "/images/spring.png",
      tag: "Java",
    },
    {
      id: 4,
      title: "AWS S3 Migration Tool",
      description:
        "Ferramenta que recebe inputs JSON e migra arquivos para o AWS S3 Bucket especificado no arquivo env. Feito usando Node.Js e AWS SDK.",
      link: "https://github.com/CitrusMH/AWS-S3-Migration-Tool",
      image: "/images/nodejs.webp",
      tag: "Javascript",
    },
    {
      id: 5,
      title: "Psicologo Online",
      description:
        "Ferramenta que te conecta a um psicologo online, integrando GPT 3.5 Turbo, Speech-To-Text e Text-To-Speech. Feito com Next.js e Tailwind CSS",
      link: "https://github.com/CitrusMH/Psicologo-Online",
      image: "/next.svg",
      tag: "Javascript",
    },
    {
      id: 6,
      title: "Programação Scripts - Veículos",
      description:
        "Gerenciador de Oficina Criado em Express e Node.js. Utiliza banco de dados MySQL e conexão via Sequelize para criar e gerenciar registros.",
      link: "https://github.com/CitrusMH/ProjetoPSCarros",
      image: "/images/express.svg",
      tag: "Javascript",
    },
  ];

  return (
    <>
      <div>
        <h1 className="text-5xl font-semibold text-center p-4">Projetos</h1>
      </div>
      <section className="flex bg-primary flex-col md:flex-row rounded-md border border-secondary my-2 justify-around flex-wrap   fade-in">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="p-4 m-2 flex flex-col md:max-w-[30%]"
          >
            <Image
              src={project.image}
              width={300}
              height={350}
              alt={project.title}
              className="w-full h-48 object-contain"
            />
            <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
            <p className="text-blue-300">{project.tag}</p>
            <p className="mb-4">{project.description}</p>
            {project.link === "" ? null : (
              <a
                href={project.link}
                className="font-semibold text-blue-400 hover:text-blue-500"
                target="_blank"
              >
                Mais Detalhes
              </a>
            )}
          </div>
        ))}
      </section>
    </>
  );
}

export default Projects;

import React from "react";
import Image from "next/image";

function Projects() {
  const projectData = [
    {
      id: 1,
      title: "Suporte - Vedacit",
      description:
        "Trabalhando na BeeCloud, ofereci suporte ao site institucional da Vedacit além de realizar a criação de algumas páginas. Utilizamos Next.js, React e Tailwind CSS na construção do Site. Além disso, integramos o site com o CMS Strapi. Criamos ambientes de Staging e Produção no Heroku (Back-end + Heroku Postgres e Front-end). também fiquei encarregado de migrar os assets que antes eram alocados na Salesforce para o AWS S3 Bucket.",
      link: "https://www.vedacit.com.br/",
      image: "/images/vedacit.png",
      tag: "Javascript",
    },
    {
      id: 2,
      title: "Suporte - Nadir Figueiredo",
      description:
        "Trabalhando na BeeCloud, ofereci suporte ao E-Commerce da Nadir Figueiredo. Criado a partir do Salesforce Commerce Cloud, sua contrução é feita a partir do PWA KIT, que por sua vez, utiliza React Para o Front-End. Além disso, utilizamos o SFRA baseado em Express.js para o Back-End. Atualmente sou responsável por manter o site atualizado e realizar ajustes de acordo com as necessidades do cliente (tanto Front-End, quanto Back-End).",
      link: "https://www.nadir.com.br",
      image: "/images/nadir.png",
      tag: "Javascript",
    },
    {
      id: 3,
      title: "POO - Sales Manager",
      description:
        "Este projeto tem como objetivo gerenciar produtos, clientes e pedidos dentro de bancos de dados. Utilizando o poder do SpringData para interação com o banco de dados e Thymeleaf para renderização de páginas web, Sales Manager oferece uma solução robusta e eficiente para gestão empresarial.",
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
      <section className="flex bg-primary flex-col md:flex-row rounded-md border border-secondary my-2 justify-around flex-wrap text-justify fade-in">
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
            <a
              href={project.link}
              className="font-semibold text-blue-400 hover:text-blue-500"
              target="_blank"
            >
              Mais Detalhes
            </a>
          </div>
        ))}
      </section>
    </>
  );
}

export default Projects;

import React from "react";
import Image from "next/image";

function Projects() {
  const projectData = [
    {
      id: 1,
      title: "Suporte Técnico & Front-End - BeeCloud",
      description:
        "Modernização do site institucional com arquitetura SSR (Server-Side Rendering). Migração de assets da Salesforce para AWS S3, garantindo alta disponibilidade e redução de latência. Configuração de ambientes de staging no Heroku com integração contínua ao CMS Strapi.",
      link: "",
      image: "/next.svg",
      tag: "Next.js, React, Tailwind CSS, Strapi, AWS S3",
    },
    {
      id: 2,
      title: "E-Commerce Scalable - Salesforce Commerce Cloud - BeeCloud",
      description:
        "Manutenção e evolução de plataforma de e-commerce com 10k+ usuários/mês. Otimização de performance do SFRA, implementação de novas features e integrações com APIs RESTful. Desenvolvimento de PWA com SFCC PWA Kit e React.",
      link: "",
      image: "/images/react.webp",
      tag: "SFCC PWA Kit, React, SFRA (Express.js)",
    },
    {
      id: 3,
      title: "Sales Manager - Sistema de Gestão Empresarial",
      description:
        "Plataforma full-stack para gestão de vendas, clientes e inventário, adotando princípios de Clean Architecture. Integração com APIs RESTful e relatórios dinâmicos para tomada de decisão estratégica. ",
      link: "https://github.com/CitrusMH/SalesManager_ProjetoPOO2024",
      image: "/images/spring.png",
      tag: "Java, Spring Boot, Thymeleaf",
    },
    {
      id: 4,
      title: "AWS S3 Migration Tool",
      description:
        "Ferramenta que recebe inputs JSON e migra arquivos para o AWS S3 Bucket especificado no arquivo env. Feito usando Node.Js e AWS SDK.",
      link: "https://github.com/CitrusMH/AWS-S3-Migration-Tool",
      image: "/images/nodejs.webp",
      tag: "Node.js, AWS SDK, JSON",
    },
    {
      id: 5,
      title: "Sistema de Comentários",
      description:
        "Um sistema de comentários moderno e seguro, construído com Nuxt 3 e Supabase, que proporciona interação em tempo real e uma experiência fluida tanto no desktop quanto em dispositivos móveis.",
      link: "https://github.com/CitrusMH/trabalho-pw",
      image: "/images/nuxt.png",
      tag: "Vue, Nuxt, Supabase",
    },
    {
      id: 6,
      title: "Programação Scripts - Veículos",
      description:
        "Gerenciador de Oficina Criado em Express e Node.js. Utiliza banco de dados MySQL e conexão via Sequelize para criar e gerenciar registros.",
      link: "https://github.com/CitrusMH/ProjetoPSCarros",
      image: "/images/express.svg",
      tag: "Express.js, Node.js, MySQL, Sequelize",
    },
  ];

  return (
    <>
      <div>
        <h1 className="text-4xl font-semibold text-center p-4">Projetos</h1>
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
            <p className="text-blue-300 my-2 font-bold">{project.tag}</p>
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

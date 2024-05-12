import { Link } from 'react-router-dom';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import MarkdownPreview from '@uiw/react-markdown-preview';

export default function Home() {

    const welcomeText = `\`\`\`js
function HelloEverybody() {
    console.log('Olá, me chamo Solandro, e este é o meu projeto no desafio de chatbot da imersão ia da alura. 
                O intuito deste projeto é um chatbot que gera README para repositorios do GitHub, 
                onde assim você consegue criar um README de forma mais rápida 
                e prática e deixar o seu repositorio bem documentado!')
}

HelloEverybody()
\`\`\`
    `

    const profile = `
![About me](http://localhost:5173/src/assets/about-me.jpeg "Solandro Santana Sousa Junior")


`

    const aboutMe = `# About Me

Estudante de Engenharia da Computação, apaixonado por tecnologia e programação, 
sempre buscando aprender novas tecnologias e aprimorar as que já conheço. 
Atualmente trabalho como técnico de informática, e estou em busca de migrar 
para a área de DevOps.
    
    `

    const skills = `# Habilidades

### Front-end
    
[![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://www.javascript.com/)
[![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
<br>
    
### Back-end
    
[![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![Python](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white)](https://www.python.org/)
[![Django](https://img.shields.io/badge/-Django-092E20?style=flat-square&logo=django&logoColor=green)](https://www.djangoproject.com/)
[![MySQL](https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
<br>
    
### Cloud Computing & DevOps
    
[![AWS](https://img.shields.io/badge/-AWS-FF9900?style=flat-square&logo=amazonaws&logoColor=white)](https://aws.amazon.com/)
[![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)
[![Terraform](https://img.shields.io/badge/-Terraform-6264A7?style=flat-square&logo=terraform&logoColor=white)](https://www.terraform.io/)
[![Ansible](https://img.shields.io/badge/-Ansible-EE0000?style=flat-square&logo=ansible&logoColor=white)](https://www.ansible.com/)
[![Shell Script/Linux](https://img.shields.io/badge/-Shell_Script%20/%20Linux-333333?style=flat-square&logo=gnu-bash&logoColor=white)](https://www.gnu.org/software/bash/)    `;


    return (
        <>
            <section className="home">
                <Header />
                <div className="container mx-auto flex flex-col items-center px-4 py-16 md:py-32 md:px-10 lg:px-32 xl:max-w-5xl">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl text-white">Projeto {" "}
                        <span className="text-blue-600">Imersão IA - </span> Alura
                    </h1>
                    <MarkdownPreview className='my-5' source={welcomeText} />
                    <div className="flex flex-wrap justify-center gap-10">
                        <Link to='/chat'>
                            <Button className="px-8 py-6 text-lg font-semibold rounded bg-primary">
                                Começar!
                            </Button>
                        </Link>
                        <a href="#about-me">
                            <Button variant={'outline'} className="px-8 py-6 text-lg font-semibold rounded ">
                                Sobre min!
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="about-me md:py-5 bg-black" id='about-me'>
                <div className="container px-4 md:px-6">
                    <div className="mx-auto grid lg:max-w-5xl 2xl:max-w-7xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
                        <div className='mx-5'>
                            <MarkdownPreview source={profile} />
                        </div>
                        <div className="space-y-10 w-full">
                            <MarkdownPreview source={aboutMe} />
                            <MarkdownPreview source={skills} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

// <Link to='/chat'>ir</Link>
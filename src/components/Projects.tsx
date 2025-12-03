import React from 'react';
import { Github, Calendar } from 'lucide-react';

const projects = [
  {
    title: 'Foresee haircut with AI',
    description: `Consumed gemini-2.5-flash-image from Google, popularly called the NanoBanana and predicted how a person would look with any chosen hairstyle using AI/ML inference. Built a user-friendly UI using React, stored user credentials and the last uploaded reference image in MySQL, developed secure login/signup using JWT authentication and deployed it with Vercel.`,
    image: '/ai-agent.jpg',
    technologies: ['ReactJS', 'MySQL', 'NanoBanana', 'NodeJS', 'ExpressJS'],
    githubUrl: 'https://github.com/Praveen-Mariappasamy/Hairstyle-Predictor',
    date: '2025'
  },
  {
    title: 'Friend Zone',
    description: `Created a social media web application capable of analysing user sentiments and support mental well-being using an inbuilt chatbot created using DialogFlow. Integrated the sentiment analysis model with an optimised dataset to boost its F-Score to 0.9. Made use of Socket.IO to implement real-time messaging between users`,
    image: 'https://images.pexels.com/photos/1036804/pexels-photo-1036804.jpeg',
    technologies: ['ReactJS', 'MongoDB', 'ExpressJS', 'NodeJS', 'Python', 'NLP', 'Socket.io'],
    githubUrl: 'https://github.com/Praveen-Mariappasamy/Twitter',
    date: '2024'
  },
  {
    title: 'E-Commerce Store',
    description: `A full-fledged e-commerce platform using React, NodeJS, ExpressJS, and MongoDB, built core functionalities such as user authentication, and the complete storefront activities that include signup, cart, wish-list and checkout. Integrated Razorpay for secure payment processing and built robust inventory management and admin dashboard modules, ensuring smooth store operations and streamlined workflow for administrators.`,
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['ReactJS', 'NodeJS', 'MongoDB', 'ExpressJS'],
    githubUrl: 'https://github.com/Praveen-Mariappasamy/ShopNOW',
    date: '2023'
  },
  {
    title: 'Books Search App',
    description: 'A place where you can search for books based on categories and view ratings and descriptions and decide what to read next. Powered by google books API and firebase.',
    image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Google Books API'],
    githubUrl: 'https://github.com/Praveen-Mariappasamy/Book-Search',
    date: '2023'
  },
  {
    title: 'Business Portfolio',
    description: `A ReactJS based portfolio site for a company, to gain online presence and drive sales. Deployed through Vercel and configured the CDN to optimise static asset delivery and improve performance and security using Cloudflare’s reverse proxy.`,
    image: 'https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg',
    technologies: ['ReactJS', 'Tailwind CSS', 'Deployment', 'CloudflareCDN'],
    githubUrl: 'https://github.com/Praveen-Mariappasamy/MSF-Portfolio',
    date: '2023'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="pb-20 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                    aria-label="View source code"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
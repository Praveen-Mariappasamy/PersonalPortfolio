import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const projects = [
  {
    title: 'Friend Zone',
    description: 'A complete social media platform where users can post images, like, comment, follow other users and message each others in real time where each post is analysed via ML. User found to be depressed are supported by a chatbot.',
    image: 'https://images.pexels.com/photos/1036804/pexels-photo-1036804.jpeg',
    technologies: ['ReactJS', 'MongoDB', 'ExpressJS', 'NodeJS', 'Python', 'NLP', 'Socket.io'],
    githubUrl: 'https://github.com/Praveen-Mariappasamy/Twitter',
    date: '2024'
  },
  {
    title: 'E-Commerce Store',
    description: 'A full-featured e-commerce platform built with React, Express.js, and MongoDB. Features include user authentication, payment processing, inventory management, and admin dashboard.',
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
    description: `Started as something to help my father's business to get online presence and so this is always so special to me.`,
    image: 'https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg',
    technologies: ['ReactJS', 'Tailwind CSS', 'Deployment', 'CloudflareCDN'],
    githubUrl: 'https://github.com/Praveen-Mariappasamy/MSF-Portfolio',
    liveUrl: 'https://ms-forms.shop/',
    date: '2023'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="pb-20 px-4 sm:px-6 lg:px-8">
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
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                      aria-label="View live site"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
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
import React from 'react';
import { Code, Zap, Users } from 'lucide-react';

const skills = [
  {
    icon: <Code size={24} />,
    title: 'Development',
    description: 'Full-stack development with modern frameworks and technologies',
    technologies: ['EmberJS', 'MERN', 'TypeScript', 'Java', 'MySQL']
  },
  {
    icon: <Zap size={24} />,
    title: 'Performance & Deployment',
    description: 'Optimized solutions for speed and scalable deployments',
    technologies: ['Webpack', 'CI/CD', 'CDN']
  },
  {
    icon: <Users size={24} />,
    title: 'Collaboration',
    description: 'Effective teamwork and project management',
    technologies: ['Git']
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm a passionate developer with 3+ years of experience creating digital solutions 
            that make a difference. I love turning complex problems into simple, beautiful designs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">My Story</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I started my journey in tech during college, where I discovered a strong passion for building digital solutions that address real-world challenges. What began as curiosity quickly grew into a career centered on innovation and user-focused development.
              </p>
              <p>
                Currently, I’m working at Zoho, where I’ve had the opportunity to work on multiple impactful projects, gaining hands-on experience across different technologies and problem domains. Through this journey, I’ve stayed connected with some highly influential developers, which has helped me broaden my perspective and continuously improve my craft.
              </p>
              <p>
                I believe in writing clean, efficient code and creating products that deliver seamless user experiences. Beyond my work, I’m always eager to explore emerging technologies and refine my skills to stay ahead in the ever-evolving tech landscape.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">What I Do</h3>
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {skill.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        {skill.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech) => (
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
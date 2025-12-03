import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Member Technical Staff',
    company: 'Zoho Corporation',
    location: 'Chennai, India',
    period: '2025 - Present',
    achievements: [
      'Worked on 20+ features and enhancements, including the theme editor, admin application and theme components for ZOHO Commerce',
      'Reduced load time by several milliseconds by implementing multiple optimisations, including the use of Service Workers',
      'Optimised CI/CD pipelines in a repository that powers around 15 core finance applications reducing time taken for certain jobs by 4 - 5 minutes'
    ]
  },
  {
    title: 'Technical Trainee',
    company: 'Zoho Corporation',
    location: 'Chennai, India',
    period: '2024 - 2025',
    achievements: [
      'Engineered interactive components used across 20+ themes',
      `Part of an accessibility core team and improved finance group apps' accessibility to ensure compliance`,
      'Implemented pseudo-localisation to ensure UI consistency across languages that are supported'
    ]
  },
];

export default function Experience() {
  return (
    <section id="experience" className="pb-20 pt-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My professional journey and key achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 hidden sm:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 hidden sm:block"></div>
                
                <div className="sm:ml-16 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {exp.company}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                          <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
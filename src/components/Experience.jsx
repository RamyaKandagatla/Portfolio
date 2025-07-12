import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const projects = [
    {
      id: 1,
      title: 'Selfie PRV (Profile Re-Verification) Offer',
      description: (
        <ol className="list-disc ml-6 space-y-1">
          <li>
            Designed and implemented the <strong>Selfie PRV</strong> feature across:
            <ol className="list-disc ml-6">
              <li>Android</li>
              <li>iOS</li>
              <li>Web</li>
              <li>Weblink</li>
            </ol>
          </li>
          <li>Allowed users to re-upload selfies if rejected.</li>
          <li>
            Impact:
            <ol className="list-disc ml-6">
              <li>Loan disbursal increased by <strong>0.25%</strong>.</li>
              <li>Conversion rate rose by <strong>4–5%</strong>.</li>
            </ol>
          </li>
        </ol>
      ),
      techStacks: 'React.js, JavaScript, TypeScript, HTML, CSS, AWS S3, Firebase, MySQL',
      style: 'justify-self-start'
    },
    {
      id: 2,
      title: 'Dynamic Image Capture for VKYC',
      description: (
        <ol className="list-disc ml-6 space-y-1">
          <li>Built dynamic image capture for DBL and LAP customers.</li>
          <li>Used Firebase Database for personalized dropdowns.</li>
          <li>
            Outcomes:
            <ol className="list-disc ml-6">
              <li>Streamlined loan processing.</li>
              <li>Reduced verification errors.</li>
              <li>Accelerated approvals.</li>
              <li><strong>15% increase</strong> in loan approval rate.</li>
            </ol>
          </li>
        </ol>
      ),
      techStacks: 'React.js, JavaScript, HTML, CSS, AWS S3, Firebase',
      style: 'justify-self-end'
    },
    {
      id: 3,
      title: 'Code Splitting with @loadable/component',
      description: (
        <ol className="list-disc ml-6 space-y-1">
          <li>Replaced <code>react-loadable</code> with <code>@loadable/component</code>.</li>
          <li>
            Benefits:
            <ol className="list-disc ml-6">
              <li><strong>35% faster</strong> page load time.</li>
              <li><strong>15% boost</strong> in retention.</li>
              <li>Smoother UX and better maintainability.</li>
            </ol>
          </li>
        </ol>
      ),
      techStacks: 'React.js, JavaScript, AWS S3',
      style: 'justify-self-start'
    },
    {
      id: 4,
      title: 'App Scaling for Responsive UX',
      description: (
        <ol className="list-disc ml-6 space-y-1">
          <li>Built viewport scaling logic based on device screen/resolution.</li>
          <li>Improved layout consistency across devices.</li>
          <li><strong>30% increase</strong> in user engagement.</li>
        </ol>
      ),
      techStacks: 'React.js, JavaScript, HTML, CSS',
      style: 'justify-self-end'
    }
  ];

  return (
    <div
      name="experience"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white py-28"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-6">
          <p className="text-4xl font-bold inline text-[rgb(255,1,79)]">
            EXPERIENCE
          </p>
          <div className="w-20 h-1 mt-2 bg-[rgb(255,1,79)] rounded-full"></div>
        </div>

        <div className="grid gap-10 my-6 mx-3">
          {projects.map(({ id, title, description, techStacks, style }) => (
            <motion.article
              key={id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              className={`text-slate-300 bg-gradient-to-b from-gray-900 to-gray-700 shadow-md shadow-gray-600 rounded-lg w-full max-w-2xl p-6 ${style} hover:scale-105 duration-500`}
            >
              <h3 className="text-white font-semibold text-xl mb-2">{title}</h3>
              <div className="leading-relaxed text-base">{description}</div>
              <p className="mt-4 text-sm text-gray-300">
                <span className="text-white font-semibold">Tech Stack: </span>
                {techStacks}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

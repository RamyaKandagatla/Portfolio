import React from 'react'

const Projects = () => {

	const projects = [
		{
			id: 1,
			title: 'Selfie PRV(Profile Re-Verification) Offer',
			description: (
				<>
					Designed and implemented a Selfie PRV (Profile Re-Verification)
					feature across Android, iOS, web, and weblink platforms, enabling customers rejected due to improper selfies to
					re-upload their images. This enhancement boosted loan disbursal by 0.25% and increased the overall user
					conversion rate by 4-5%.
				</>
			),
			techStacks: 'React.js, JavaScript, TypeScript, HTML, CSS, AWS S3, Firebase, MySQL',
			style: 'justify-self-start'
		},
		{
			id: 2,
			title: 'Developed Dynamic Image Capture Feature for VKYC',
			description: (
				<>
					Engineered dynamic image capture for DBL and LAP
					customers, streamlining VKYC by ensuring required documents were captured during the call. Utilized Firebase
					Database to generate customer-specific document drop-downs, improving loan processing efficiency, reducing
					errors, and accelerating approval times. The overall loan approval rate increase by 15% for DBL and LAP
					customers.
				</>
			),
			techStacks: 'React.js, JavaScript, HTML, CSS, AWS S3, firebase',
			style: 'justify-self-end'
		},
		{
			id: 3,
			title: 'Migrated to @loadable/component for Code Splitting',
			description: (
				<>
					Spearheaded the migration from react-loadable to
					@loadable/component for code splitting, enhancing application performance and maintainability. Through
					strategic planning, comprehensive code refactoring, and rigorous testing, achieved a 35% reduction in page load
					time and a 15% increase in user retention, resulting in a smoother and more efficient user experience.
				</>
			),
			techStacks: 'React.js, JavaScript, AWS S3',
			style: 'justify-self-start'
		},
		{
			id: 4,
			title: 'Optimized App Scaling for Enhanced Responsiveness',
			description: (
				<>
					Designed and implemented a viewport scaling logic
					based on device screen size and resolution. Optimizing layouts and usability across all devices. This responsive
					design resulted in a 30% increase in user engagement.
				</>
			),
			techStacks: 'React.js, JavaScript, HTML, CSS',
			style: 'justify-self-end'
		}
	]
  return (
    <div name='projects'
		className="w-full bg-gradient-to-b from-black to-gray-800 text-white pt-20 pb-10"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
				</div>

				
        <div className="grid gap-8">
          {projects.map(({ id, title, description,techStacks,style }) => (
            <div key={id} className={`shadow-md shadow-gray-600 rounded-lg w-full max-w-md md:max-w-lg lg:max-w-xl p-4 ${style} hover:scale-105 duration-500`}>
              <h3>{title}</h3>
							<p className='text-gray-500 p-2'>{description}</p>
							<p className='p-2'>TechStacks: <span className='text-gray-500'>{techStacks}</span></p>
            </div>
          ))}
        </div>

			</div>
    </div>
  )
}

export default Projects
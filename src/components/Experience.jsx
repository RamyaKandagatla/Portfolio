import React from 'react'

const Experience = () => {

	const projects = [
		{
			id: 1,
			title: 'Selfie PRV(Profile Re-Verification) Offer',
			description: (
				<ol className="list-disc ml-6">
					<li>Designed and implemented the <strong>Selfie PRV (Profile Re-Verification)</strong> feature across multiple platforms:
						<ol className="list-disc ml-6">
							<li>Android</li>
							<li>iOS</li>
							<li>Web</li>
							<li>Weblink</li>
						</ol>
					</li>
					<li>Enabled customers rejected due to improper selfies to re-upload their images.</li>
					<li>Achieved the following improvements:
						<ol class="list-disc ml-6">
							<li>Boosted loan disbursal by <strong>0.25%</strong>.</li>
							<li>Increased overall user conversion rate by <strong>4-5%</strong>.</li>
						</ol>
					</li>
				</ol>
			),
			techStacks: 'React.js, JavaScript, TypeScript, HTML, CSS, AWS S3, Firebase, MySQL',
			style: 'justify-self-start'
		},
		{
			id: 2,
			title: 'Developed Dynamic Image Capture Feature for VKYC',
			description: (
				<ol className="list-disc ml-6">
					<li>Engineered dynamic image capture for DBL and LAP customers, streamlining the VKYC process by ensuring required documents were captured during the call.</li>
					<li>Utilized Firebase Database to generate customer-specific document drop-downs.</li>
					<li>Achieved the following improvements:
						<ol className="list-disc ml-6">
							<li>Improved loan processing efficiency.</li>
							<li>Reduced errors during the verification process.</li>
							<li>Accelerated approval times.</li>
							<li>Increased overall loan approval rate by <strong>15%</strong> for DBL and LAP customers.</li>
						</ol>
					</li>
				</ol>
			),
			techStacks: 'React.js, JavaScript, HTML, CSS, AWS S3, firebase',
			style: 'justify-self-end'
		},
		{
			id: 3,
			title: 'Migrated to @loadable/component for Code Splitting',
			description: (
				<ol className="list-disc ml-6">
					<li>Spearheaded the migration from <code>react-loadable</code> to <code>@loadable/component</code> for code splitting.</li>
					<li>Enhanced application performance and maintainability through:
						<ol className="list-disc ml-6">
							<li>Strategic planning.</li>
							<li>Comprehensive code refactoring.</li>
							<li>Rigorous testing.</li>
						</ol>
					</li>
					<li>Achieved the following outcomes:
						<ol className="list-disc ml-6">
							<li>35% reduction in page load time.</li>
							<li>15% increase in user retention.</li>
							<li>Delivered a smoother and more efficient user experience.</li>
						</ol>
					</li>
				</ol>
			),
			techStacks: 'React.js, JavaScript, AWS S3',
			style: 'justify-self-start'
		},
		{
			id: 4,
			title: 'Optimized App Scaling for Enhanced Responsiveness',
			description: (
				<ol className="list-disc ml-6">
					<li>Designed and implemented a viewport scaling logic based on:
						<ol className="list-disc ml-6">
							<li>Device screen size.</li>
							<li>Device resolution.</li>
						</ol>
					</li>
					<li>Optimized layouts and usability across all devices.</li>
					<li>Achieved a <strong>30% increase in user engagement</strong> through responsive design.</li>
				</ol>
			),
			techStacks: 'React.js, JavaScript, HTML, CSS',
			style: 'justify-self-end'
		}
	]
  return (
    <div name='experience'
		className="w-full bg-gradient-to-b from-black to-gray-800 text-white py-28"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">Experience</p>
				</div>

				
        <div className="grid gap-8">
          {projects.map(({ id, title, description, techStacks, style }) => (
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

export default Experience
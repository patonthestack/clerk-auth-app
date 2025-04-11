import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LandingPage() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<div className="flex flex-col items-center justify-center px-4 py-20 text-center bg-gradient-to-b from-blue-50 to-white">
				<h1 className="max-w-4xl text-5xl font-bold text-gray-900 md:text-6xl">
					Build Websites Faster with{' '}
					<span className="text-blue-600">DevFlow</span>
				</h1>
				<p className="max-w-2xl mt-6 text-xl text-gray-600">
					The all-in-one platform for developers to create, deploy, and manage
					modern web applications with ease.
				</p>
				<div className="flex flex-wrap justify-center gap-4 mt-10">
					<Link href={'/dashboard'}>
						<Button size={'lg'} className="px-8 py-6 text-lg">
							Get Started
						</Button>
					</Link>
				</div>
			</div>

			{/* Features Section */}
			<div className="py-20 bg-white">
				<div className="container px-4 mx-auto">
					<h2 className="mb-16 text-4xl font-bold text-center text-gray-900">
						Everything You Need to Build Amazing Websites
					</h2>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						{/* Feature 1 */}
						<div className="p-6 bg-white rounded-lg shadow-sm">
							<div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-lg">
								<svg
									className="w-6 h-6 text-blue-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
									/>
								</svg>
							</div>
							<h3 className="mb-2 text-xl font-semibold text-gray-900">
								Visual Editor
							</h3>
							<p className="text-gray-600">
								Build websites visually with our drag-and-drop interface, no
								coding required.
							</p>
						</div>

						{/* Feature 2 */}
						<div className="p-6 bg-white rounded-lg shadow-sm">
							<div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-lg">
								<svg
									className="w-6 h-6 text-blue-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 6v6m0 0v6m0-6h6m-6 0H6"
									/>
								</svg>
							</div>
							<h3 className="mb-2 text-xl font-semibold text-gray-900">
								Component Library
							</h3>
							<p className="text-gray-600">
								Access hundreds of pre-built components to accelerate your
								development.
							</p>
						</div>

						{/* Feature 3 */}
						<div className="p-6 bg-white rounded-lg shadow-sm">
							<div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-lg">
								<svg
									className="w-6 h-6 text-blue-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
									/>
								</svg>
							</div>
							<h3 className="mb-2 text-xl font-semibold text-gray-900">
								One-Click Deploy
							</h3>
							<p className="text-gray-600">
								Deploy your applications with a single click to our global CDN
								network.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="py-20 bg-blue-600">
				<div className="container px-4 mx-auto text-center">
					<h2 className="mb-6 text-4xl font-bold text-white">
						Ready to Transform your Web Development?
					</h2>
					<p className="max-w-2xl mx-auto mb-10 text-xl text-blue-100">
						Join thousands of developers who are building fater and better with
						DevFlow.
					</p>
					<Link href={'/dashboard'}>
						<Button size={'lg'} className="px-8 py-6 text-lg">
							Get Started
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}

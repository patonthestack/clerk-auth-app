'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const Dashboard = () => {
	const [activeProject, setActiveProject] = useState<string | null>(null);

	const projects = [
		{
			id: '1',
			name: 'E-commerce Site',
			status: 'In Progress',
			lastUpdated: '2 hours ago',
		},
		{
			id: '2',
			name: 'Portfolio Website',
			status: 'Completed',
			lastUpdated: '2 days ago',
		},
		{
			id: '3',
			name: 'Blog Platform',
			status: 'Planning',
			lastUpdated: 'Just now',
		},
	];
	return (
		<div className="min-h-screen bg-gray-50">
			{/* Dashboard Content */}
			<div className="container p-6 mx-auto">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
					{/* Stats Cards  */}
					<Card>
						<CardHeader>
							<CardTitle>Total Projects</CardTitle>
							<CardDescription>
								Your active and completed projects
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-4xl font-bold">{projects.length}</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>In Progress</CardTitle>
							<CardDescription>
								Projects currently being developed
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-4xl font-bold">
								{projects.filter((p) => p.status === 'In Progress').length}
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Completed</CardTitle>
							<CardDescription>Successfully finisehd projects</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-4xl font-bold">
								{projects.filter((p) => p.status === 'Completed').length}
							</p>
						</CardContent>
					</Card>
				</div>

				{/* Projects List */}
				{/* left off at 35:03  */}
				<h2 className="mt-10 mb-4 text-2xl font-semibold">Your Projects</h2>
				<div className="overflow-hidden bg-white border rounded-lg">
					<div className="grid grid-cols-4 gap-4 p-4 font-medium text-gray-500 border-b">
						<div>Project Name</div>
						<div>Status</div>
						<div>Last Updated</div>
						<div>Actions</div>
					</div>

					{projects.map((project) => (
						<div
							key={project.id}
							className={`grid grid-cols-4 gap-4 p-4 border-b hover:bg-gray-50 ${
								activeProject === project.id ? 'bg-blue-100' : 'bg-white-100'
							}`}
							onClick={() => setActiveProject(project.id)}
						>
							<div className="font-medium text-gray-900">{project.name}</div>
							<div>
								<span
									className={`px-2 py-1 text-xs font-medium rounded-full ${
										project.status === 'Completed'
											? 'bg-green-100 text-green-800'
											: project.status === 'In Progress'
											? 'bg-blue-100 text-blue-800'
											: 'bg-yellow-100 text-yellow-800'
									}`}
								>
									{project.status}
								</span>
							</div>
							<div className="text-gray-500">{project.lastUpdated}</div>
							<div>
								<Button variant={'outline'} size={'sm'} className="mr-2">
									Edit
								</Button>
								<Button
									variant={'outline'}
									size={'sm'}
									className="text-blue-600"
								>
									Preview
								</Button>
							</div>
						</div>
					))}
				</div>

				{/* Recent Activity */}
				<h2 className="mt-10 mb-4 text-2xl font-semibold">Recent Activity</h2>
				<Card>
					<CardContent className="p-0">
						<div className="divide-y">
							<div className="p-4">
								<p className="font-medium text-gray-900">
									You deployed E-commerce Site
								</p>
								<p className="text-sm text-gray-500">2 hours ago</p>
							</div>
							<div className="p-4">
								<p className="font-medium text-gray-900">
									You updated Blog Platform
								</p>
								<p className="text-sm text-gray-500">4 hours ago</p>
							</div>
							<div className="p-4">
								<p className="font-medium text-gray-900">
									You created Portfolio Website
								</p>
								<p className="text-sm text-gray-500">2 days ago</p>
							</div>
						</div>
					</CardContent>
					<CardFooter>
						<Button variant={'ghost'} size={'sm'} className="w-full">
							View All Activity
						</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
};

export default Dashboard;

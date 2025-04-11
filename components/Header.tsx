import { Shield } from 'lucide-react';
import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Header = () => {
	return (
		<div className="p-4 flex justify-between items-center">
			<Link href={'/'} className="flex items-center">
				<Shield className="w-6 h-6 text-slate-900 dark:text-slate-50 mr-2"></Shield>
				<h1 className="text-2xl font-semibold">My App</h1>
			</Link>

			<div>
				<SignedIn>
					<UserButton />
				</SignedIn>
				<SignedOut>
					<SignInButton mode="modal" />
				</SignedOut>
			</div>
		</div>
	);
};

export default Header;

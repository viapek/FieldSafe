
'use client';

import {useUser} from '@/hooks/use-user';
import {Button} from '@/components/ui/button';
import {useRouter} from 'next/navigation';

export default function Home() {
  const {user, isLoading} = useUser();
  const router = useRouter();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (user) {
    router.push('/dashboard');
    return <div>Redirecting to dashboard...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-4">Welcome to Rolebase</h1>
      <p className="text-muted-foreground mb-4">Please sign in to continue</p>
      <Button onClick={() => router.push('/sign-in')}>Sign In</Button>
    </div>
  );
}


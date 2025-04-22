
'use client';

import {useState} from 'react';
import {getAuth, signInAnonymously} from 'firebase/auth';
import {app} from '@/lib/firebase';
import {useRouter} from 'next/navigation';
import {Button} from '@/components/ui/button';

const SignInPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const signIn = async () => {
    setIsLoading(true);
    try {
      const auth = getAuth(app);
      await signInAnonymously(auth);
      router.push('/dashboard');
    } catch (error) {
      console.error('Error signing in:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-4">Sign In</h1>
      <p className="text-muted-foreground mb-4">
        Click the button below to sign in anonymously.
      </p>
      <Button onClick={signIn} disabled={isLoading}>
        {isLoading ? 'Signing In...' : 'Sign In Anonymously'}
      </Button>
    </div>
  );
};

export default SignInPage;

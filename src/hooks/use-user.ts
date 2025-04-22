
import {useAuth} from '@/components/auth-provider';

export const useUser = () => {
  const auth = useAuth();
  return {
    user: auth.user,
    isLoading: auth.isLoading,
  };
};

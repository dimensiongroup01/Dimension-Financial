import type { Metadata } from 'next';
import AuthAccessScreen from '@/components/AuthAccessScreen';

export const metadata: Metadata = {
  title: 'Sign-up',
  description: 'Create your CRP account.'
};

export default function SignupPage() {
  return <AuthAccessScreen initialMode="signup" />;
}

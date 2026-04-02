import type { Metadata } from 'next';
import AuthAccessScreen from '@/components/AuthAccessScreen';

export const metadata: Metadata = {
  title: 'Log-In',
  description: 'Log in to your CRP account.'
};

export default function LoginPage() {
  return <AuthAccessScreen initialMode="login" />;
}

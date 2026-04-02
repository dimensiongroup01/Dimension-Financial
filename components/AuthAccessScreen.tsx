'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';

type Mode = 'login' | 'signup';

const idTypes = ['Master ID (State Admin)', 'CRP ID (Pashu Sakhi, Krishi Sakhi, CRP-EP)', 'High Level CRP ID'];

type AuthAccessScreenProps = {
  initialMode?: Mode;
};

export default function AuthAccessScreen({ initialMode = 'login' }: AuthAccessScreenProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [mode, setMode] = useState<Mode>(initialMode);
  const [activeIdType, setActiveIdType] = useState(idTypes[0]);
  const [masterId, setMasterId] = useState('CRP001');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('CRP');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const isLogin = mode === 'login';
  const pageForMode = (targetMode: Mode) => (targetMode === 'login' ? '/login' : '/signup');

  const switchMode = (targetMode: Mode) => {
    setMode(targetMode);
    setMessage('');
    setError('');
    const targetPath = pageForMode(targetMode);
    if (pathname !== targetPath) {
      router.push(targetPath);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    setError('');

    try {
      const response = await fetch(`/api/auth/${mode}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          idType: activeIdType,
          masterId,
          password,
          role
        })
      });

      const data = (await response.json()) as { message?: string; error?: string };
      if (!response.ok) {
        setError(data.error ?? 'Request failed. Please try again.');
        return;
      }

      setMessage(data.message ?? (isLogin ? 'Login successful.' : 'Sign-up successful.'));
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="h-[100svh] overflow-hidden bg-[radial-gradient(circle_at_20%_0%,#dff4ff_0%,#cde8ff_34%,#f5f8ff_100%)] p-3 text-ink">
      <section className="mx-auto flex h-full w-full max-w-[390px] flex-col rounded-[2rem] border border-blue-200/80 bg-white/95 p-3 shadow-[0_22px_65px_rgba(10,40,90,0.23)]">
        <header className="pb-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-aqua">Secure Access</p>
          <h1 className="font-display text-[1.7rem] font-semibold leading-[1]">
            {isLogin ? 'Log-In Portal' : 'Create Account'}
          </h1>
          <p className="mt-1 text-[11px] text-mist">Structured ID access and CRP enrollment</p>
        </header>

        <div className="grid min-h-0 flex-1 grid-rows-[auto_auto_auto] gap-2 overflow-hidden">
          <article className="rounded-2xl border border-blue-200 bg-[#f8fbff] p-2.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-mist">ID Type</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {idTypes.map((label) => {
                const selected = activeIdType === label;
                return (
                  <button
                    key={label}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActiveIdType(label)}
                    className={`rounded-full border px-2 py-1 text-[10px] font-semibold transition ${
                      selected
                        ? 'border-teal-700 bg-teal-700 text-white'
                        : 'border-blue-200 bg-white text-mist hover:border-aqua/70 hover:text-ink'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            <form className="mt-2 space-y-1.5" onSubmit={handleSubmit}>
              <label className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-mist" htmlFor="master-id">
                CRP ID / Master ID
              </label>
              <input
                id="master-id"
                className="input-shell h-8 px-3 py-1 text-xs"
                value={masterId}
                onChange={(event) => setMasterId(event.target.value)}
                required
              />

              <label className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-mist" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="input-shell h-8 px-3 py-1 text-xs"
                placeholder="Enter password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />

              <label className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-mist" htmlFor="role">
                Role
              </label>
              <input
                id="role"
                className="input-shell h-8 px-3 py-1 text-xs"
                value={role}
                onChange={(event) => setRole(event.target.value)}
                required
              />

              <div className="flex gap-2 pt-0.5">
                <button
                  type="submit"
                  className="h-9 flex-1 rounded-xl bg-[#07173c] text-xs font-semibold text-white transition hover:brightness-110"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Please wait...' : isLogin ? 'Log-In' : 'Sign-up'}
                </button>
                <button
                  type="button"
                  onClick={() => switchMode(isLogin ? 'signup' : 'login')}
                  className="h-9 flex-1 rounded-xl border border-blue-200 bg-white text-xs font-semibold text-ink transition hover:border-aqua"
                >
                  {isLogin ? 'Go to Sign-up' : 'Back to Log-In'}
                </button>
              </div>
              {message ? <p className="text-[10px] font-semibold text-teal-700">{message}</p> : null}
              {error ? <p className="text-[10px] font-semibold text-red-600">{error}</p> : null}
            </form>
          </article>

          <article className="grid grid-cols-[1fr_72px] items-center gap-2 rounded-2xl border border-orange-200 bg-[#fff2e5] p-2.5">
            <div>
              <p className="text-xs font-semibold">Image Slide Show</p>
              <p className="mt-0.5 text-[10px] text-mist">Livelihood activities, field updates and CRP highlights.</p>
            </div>
            <div className="relative h-[52px] overflow-hidden rounded-xl border border-orange-200 bg-white">
              <Image src="/images/slide.svg" alt="Slideshow preview" fill className="object-cover" />
            </div>
          </article>

          <div className="rounded-2xl border border-blue-200 bg-[#f7f9fc] p-1.5">
            <div className="grid grid-cols-2 gap-1.5">
              <button
                type="button"
                onClick={() => switchMode('login')}
                className={`h-8 rounded-lg text-[11px] font-semibold transition ${
                  isLogin
                    ? 'bg-teal-700 text-white hover:brightness-110'
                    : 'border border-blue-200 bg-white text-mist hover:border-aqua'
                }`}
              >
                Log-In
              </button>
              <button
                type="button"
                onClick={() => switchMode('signup')}
                className={`h-8 rounded-lg text-[11px] font-semibold transition ${
                  isLogin
                    ? 'border border-blue-200 bg-white text-mist hover:border-aqua'
                    : 'bg-teal-700 text-white hover:brightness-110'
                }`}
              >
                Sign-up Page
              </button>
            </div>
            <div className="mt-1 text-center">
              <Link href={isLogin ? '/signup' : '/login'} className="text-[10px] font-semibold text-aqua hover:underline">
                {isLogin ? 'New user? Open sign-up route' : 'Already have account? Open log-in route'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import Image from 'next/image';
import LoginForm from '../components/LoginForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-yellow-300 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Image src="/snapchat-logo.png" alt="Snapchat Logo" width={64} height={64} />
        </div>
        <h1 className="text-2xl font-bold text-center mb-4">Log in to Snapchat</h1>
        <LoginForm />
      </div>
    </main>
  );
}

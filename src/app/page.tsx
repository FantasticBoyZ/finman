import Dashboard from "./dashboard/page";

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  if (typeof window !== 'undefined') {
    // Mock for the browser
    import('../mocks/browser').then(({ worker }) => worker.start());
  } 
}
export async function generateMetadata() {
  return {
    title: 'Home',
  }
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-12">
      <div className="z-10 w-full justify-between lg:flex">
        <Dashboard/>
      </div>
    </main>
  );
}

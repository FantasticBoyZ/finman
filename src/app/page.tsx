import Image from "next/image";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-12">
      <div className="z-10 w-full justify-between lg:flex">
        <Dashboard/>
      </div>
    </main>
  );
}

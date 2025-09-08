import Link  from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-3">
      <h2 className="text- black text-[2rem]">Frontend Assignment for AccuKnox</h2>
      <Link className="bg-blue-600 p-2 text-[1.3rem] rounded-md text-white" href='/dashboard'>Go to Dashboard</Link>
    </div>
  );
}

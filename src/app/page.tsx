import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="mt-20 flex flex-col items-center w-full">
        <div>avatar</div>
        <div>name</div>
        <div>tag</div>
        <div>social links</div>
        <div>download cv button</div>
      </div>
    </main>
  );
}

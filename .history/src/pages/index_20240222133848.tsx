import Image from "next/image";
import Header from '@/components/header'
import Footer from '@/components/footer'
import Card01 from '@/components/cards/card01'
import Card02 from '@/components/cards/card02'
import Card03 from '@/components/cards/card03'


export default function Home() {
  return (
    <>
    <Header />
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 bg-Dark`}>
      <div>
        <h1>Hero Section</h1>
      </div>
      <div className={'flex flex-row gap-8'}>
      <Card01 />
      <Card02 />
      <Card03 />
      </div>
    </main>
    <Footer />
    </>
  );
}

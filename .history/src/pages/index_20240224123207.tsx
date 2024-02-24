import Image from "next/image";
import Header from '@/components/header'
import Footer from '@/components/footer'
import Card01 from '@/components/cards/card01'
import Card02 from '@/components/cards/card02'
import Card03 from '@/components/cards/card03'
import Heart from '@/components/spline/heart'
import Form from '@/components/form'
import Hero from '@/components/hero'



export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <main className={`flex min-h-screen flex-col items-center justify-between bg-Dark`}>
    <div className={'flex flex-row gap-20'}>
          <Card01 />
          <Card02 />
          <Card03 />
        </div>
    </main>
    <Form />
    <Footer />
    </>
  );
}

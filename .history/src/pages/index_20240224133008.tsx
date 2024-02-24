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
    <main className={`flex flex-col items-center gap-20 bg-Dark`}>
      <div className={'flex flex-col items-center gap-20'}>
        <div className={'flex flex-row items-center gap-20'}>
          <h1>What is</h1>
          <Image
                className='py-8'
                src='assets/wordmark.svg'
                width={500}
                height={500}
                alt='stardust wordmark'
                />
          <h1>?</h1>
        </div>
      </div>
      <div className={'flex flex-col items-center gap-20'}>
        <div className={'flex flex-col gap-10 items-center'}>
          <h1 className={'text-5xl'}>Subscription Plans</h1>
          <p>STARDUST is free for all, but paid plans come with extra perks, faster loading speeds and unlimited use.</p>
        </div>
        <div className={'flex flex-row gap-20 tablet:gap-10 tablet:flex-col'}>
          <Card01 />
          <Card02 />
          <Card03 />
        </div>
        </div>
    </main>
    <Form />
    <Footer />
    </>
  );
}

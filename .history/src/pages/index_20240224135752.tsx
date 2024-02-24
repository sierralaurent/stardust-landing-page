import Image from "next/image";
import Header from '@/components/header'
import Footer from '@/components/footer'
import Card01 from '@/components/cards/card01'
import Card02 from '@/components/cards/card02'
import Card03 from '@/components/cards/card03'
import Cards from '@/components/spline/cards'
import Form from '@/components/form'
import Hero from '@/components/hero'



export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <main className={`flex flex-col items-center gap-20 bg-Dark`}>
      <div className={'flex flex-col items-center gap-20 py-16'}>
        <div className={'flex flex-row items-center gap-3'}>
          <h1 className='text-5xl'>What is</h1>
          <Image
                className=''
                src='assets/wordmark.svg'
                width={250}
                height={250}
                alt='stardust wordmark'
                />
          <h1 className='text-5xl'>?</h1>
        </div>
        <Cards />
        <div className={'flex flex-col items-center gap-5'}>
          <h1 className='text-xl'>A daily Horoscope app that outputs predicitions for the day based on your Zodiac sign.</h1>
          <h1 className='text-lg'>Just input your birthday, get your zodiac sign, and recieve your horoscope for the day!</h1>
        </div>
      </div>
      <div className={'flex flex-col items-center gap-20 py-16'}>
        <div className={'flex flex-col gap-10 items-center'}>
          <h1 className={'text-5xl'}>Subscription Plans</h1>
          <div className={'flex flex-row items-center gap-3'}>
          <Image
                className=''
                src='assets/wordmark.svg'
                width={150}
                height={150}
                alt='stardust wordmark'
                />
            <p className='text-xl'>is free for all, but paid plans come with extra perks, faster loading speeds and unlimited use.</p>
          </div>
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

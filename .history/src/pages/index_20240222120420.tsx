import Image from "next/image";
import Header from '@/components/header'
import Footer from '@/components/footer'
import Card01 from '@/components/card01'

export default function Home() {
  return (
    <>
    <Header />
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <Card01 />
    </main>
    <Footer />
    </>
  );
}

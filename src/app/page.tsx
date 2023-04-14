import { Tecla } from '@/components/Tecla'
import { Teclado } from '@/components/Teclado'

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full h-screen">
      <div className="bg-gray-900 w-full max-w-[356px]  rounded-[48px] p-8 shadow-2xl">
        <header className="flex flex-col w-full max-w-[288px] h-[86px] mb-6 px-5">
          <section className="flex justify-end mb-2 text-xl text-gray-500">
            1 + 1
          </section>

          <section className="flex justify-between">
            <span>=</span>
            <span className="text-4xl text-gray-100">2</span>
          </section>
        </header>

        <div className="grid grid-cols-4 gap-3">
          <Teclado />
        </div>
      </div>
    </main>
  )
}

import './styles/main.css'

import { MagnifyingGlassPlus } from 'phosphor-react'

import logoImage from './assets/logo-esports.svg'

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20 px-8'>
      <img src={logoImage} alt="eSports" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image1.png" alt="" />
          <div className='bg-game-gradient w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'>
            <strong className='text-white block text-base'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image2.png" alt="" />
          <div className='bg-game-gradient w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'>
            <strong className='text-white block text-base'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image3.png" alt="" />
          <div className='bg-game-gradient w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'>
            <strong className='text-white block text-base'>Counter Strike: Global Offensive</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image4.png" alt="" />
          <div className='bg-game-gradient w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'>
            <strong className='text-white block text-base'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image5.png" alt="" />
          <div className='bg-game-gradient w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'>
            <strong className='text-white block text-base'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image6.png" alt="" />
          <div className='bg-game-gradient w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'>
            <strong className='text-white block text-base'>World of Warcraft</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
      </div>

      <div className='pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden'>
        <div className='bg-[#2A2634] py-6 px-8 flex justify-between items-center'>
          <div>
            <strong className='block text-2xl text-white font-black'>Não encontrou seu duo?</strong>
            <span className='block text-base text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className='bg-violet-500 text-white font-medium rounded py-3 px-4 hover:opacity-70 transition-opacity flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

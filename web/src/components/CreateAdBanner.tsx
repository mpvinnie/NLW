import { MagnifyingGlassPlus } from "phosphor-react"
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner() {
  return (
    <div className='pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden'>
      <div className='bg-[#2A2634] py-6 px-8 flex justify-between items-center'>
        <div>
          <strong className='block text-2xl text-white font-black'>Não encontrou seu duo?</strong>
          <span className='block text-base text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
        </div>

        <Dialog.Trigger className='bg-violet-500 text-white font-medium rounded py-3 px-4 hover:opacity-70 transition-opacity flex items-center gap-3'>
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  )
}
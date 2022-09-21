import { GameController } from "phosphor-react";
import { Ad as AdInterface } from "../Game";
import * as Dialog from '@radix-ui/react-dialog'

interface AdProps {
  ad: AdInterface
}

export function Ad({ ad: {
  name,
  weekDays,
  useVoiceChannel,
  yearsPlaying,
  hourStart,
  hourEnd
} }: AdProps) {
  return (
    <div className="bg-[#2A2634] p-4 mb-1 rounded">
      <span className="block text-zinc-300 text-sm">Nome</span>
      <strong className="block text-white mb-3">{name}</strong>

      <span className="block text-zinc-300 text-sm">Tempo de jogo</span>
      <strong className="block text-white mb-3">{yearsPlaying !== 1 ? `${yearsPlaying} anos` : `${yearsPlaying} ano`}</strong>

      <span className="block text-zinc-300 text-sm">Disponibilidade</span>
      <strong className="text-white inline-block">
        {weekDays.length !== 1 ? `${weekDays.length} dias •` : `${weekDays.length} dia •`}
      </strong>
      <strong className="text-white text-xs inline-block ml-1 mb-3">{`${hourStart}h - ${hourEnd}h`}</strong>

      <span className="block text-zinc-300 text-sm">Chamada de áudio?</span>
      <strong className={`block mb-3 ${useVoiceChannel ? 'text-emerald-400' : 'text-red-400'}`}>{useVoiceChannel ? 'Sim' : 'Não'}</strong>

      <Dialog.Trigger className="flex w-full p-2 justify-center items-center gap-4 bg-[#8B5CF6] rounded text-white font-semibold">
        <GameController size={20} />
        Conectar
      </Dialog.Trigger>
    </div>
  )
}
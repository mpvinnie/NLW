import axios from "axios"
import { ArrowLeft, Disc } from "phosphor-react"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Ad } from "./components/Ad"
import { GameAdsHeader } from "./components/GameAdsHeader"
import * as Dialog from '@radix-ui/react-dialog'
import { DiscordModal } from "./components/DiscordModal"

export interface Ad {
  id: string
  name: string
  weekDays: string[]
  useVoiceChannel: boolean
  yearsPlaying: number
  hourStart: string
  hourEnd: string
}

export function Game() {
  const { id } = useParams<"id">()
  const [ads, setAds] = useState<Ad[]>([])

  const navigate = useNavigate()

  useEffect(() => {
    async function loadGameAds() {
      const response = await axios.get<Ad[]>(`http://localhost:3333/games/${id}/ads`)
      setAds(response.data)
    }

    loadGameAds()
  }, [id])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20 px-8 gap-12'>
      <header className="flex w-full justify-between items-start p-6 bg-zinc-900/50 rounded ">
        <GameAdsHeader id={String(id)} />
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="w-7 h-7 text-white" />
        </button>
      </header>

      <Dialog.Root>
        <main className="grid grid-cols-6 w-full gap-4">
          {ads.map(ad => (
            <>
              <Ad key={ad.id} ad={ad} />
              <DiscordModal key={ad.id} id={ad.id} />
            </>
            ))}
        </main>
      </Dialog.Root>
    </div>
  )
}
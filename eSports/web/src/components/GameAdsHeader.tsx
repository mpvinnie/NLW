import axios from "axios"
import { useEffect, useMemo, useState } from "react"
import { CaretDown } from 'phosphor-react'
import { intToString } from "../utils/intToString"

interface Game {
  id: string
  title: string
  description: string
  bannerUrl: string
  viewers: number
  followers: number
}

interface GameAdsHeaderProps {
  id: string
}

export function GameAdsHeader({ id }: GameAdsHeaderProps) {
  const [game, setGame] = useState({} as Game)
 
  useEffect(() => {
    async function getGame() {
      const response = await axios.get<Game>(`http://localhost:3333/games/${id}`)
      setGame(response.data)
    }

    getGame()
  }, [id])

  const viewers = useMemo(() => {
    return intToString(game.viewers)
  }, [game.viewers])

  const followers = useMemo(() => {
    return intToString(game.followers)
  }, [game.followers])

  return (
    <div className="flex gap-6">
      <img src={game.bannerUrl} alt={game.title} />
      <div className="p-2">
        <strong className="text-4xl text-white mb-2 block">{game.title}</strong>
        <p className="text-xl text-white block mb-2">
          <strong>{viewers}</strong> Viewers •
          <strong className="inline-block ml-1">{followers}</strong> Followers
        </p>
        <p className="text-zinc-300 text-sm max-w-2xl">{game.description}</p>
      </div>
    </div>
  )
}
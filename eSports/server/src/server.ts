import express from 'express'
import cors from 'cors'

import { PrismaClient } from '@prisma/client'
import { converHourStringToMinutes } from './utils/convert-hour-string-to-minutes'
import { converMinutesToHourString } from './utils/convert-minutes-to-hour-string'

const app = express()

app.use(express.json())
app.use(cors())

const prisma = new PrismaClient({
  log: ['query']
})

app.get('/games', async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true
        }
      }
    }
  })
  
  return response.json(games)
})

app.get('/games/:id', async (request, response) => {
  const { id } = request.params

  const game = await prisma.game.findUnique({
    where: {
      id
    }
  })

  return response.json(game)
})

app.post('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id
  const data = request.body

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: data.name,
      yearsPlaying: data.yearsPlaying,
      discord: data.discord,
      weekDays: data.weekDays.join(','),
      hourStart: converHourStringToMinutes(data.hourStart),
      hourEnd: converHourStringToMinutes(data.hourEnd),
      useVoiceChannel: data.useVoiceChannel
    }
  })

  return response.status(201).json(ad)
})

app.get('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true
    },
    where: {
      gameId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  const serializedAds = ads.map(ad => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(','),
      hourStart: converMinutesToHourString(ad.hourStart),
      hourEnd: converMinutesToHourString(ad.hourEnd),
    }
  })

  return response.json(serializedAds)
})

app.get('/ads/:id/discord', async (request, response) => {
  const adId = request.params.id

  const discord = await prisma.ad.findFirstOrThrow({
    where: {
      id: adId
    },
    select: {
      discord: true
    }
  })

  return response.json(discord)
})


app.listen(3333)
interface GameBannerProps {
  bannerUrl: string
  title: string
  adsCount: number
}

export function GameBanner({ bannerUrl, title, adsCount }: GameBannerProps) {
  return (
    <a href="" className='relative rounded-lg overflow-hidden'>
      <img src={bannerUrl} alt=""
        style={{
          width: '100%',
        }} 
      />
      <div className='bg-game-gradient w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'>
        <strong className='text-white block text-base title-banner'>
          {title}
        </strong>
        <span className='text-zinc-300 text-sm block truncate'>
          {adsCount} {adsCount === 1 ? 'anúncio' : 'anúncios'}
        </span>
      </div>
    </a>
  )
}
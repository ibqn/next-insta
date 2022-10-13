import Image from 'next/future/image'
import LogoImage from './logo.svg'
import DownChevronIcon from './down-chevron.svg'
import SearchIcon from './search.svg'
import Link from 'next/link'

import HomeIcon from './home.svg'
import DirectIcon from './direct.svg'
import NewPostIcon from './new-post.svg'
import FindPeopleIcon from './find-people.svg'
import ActivityFeedIcon from './activity-feed.svg'

import ProfileImage from 'images/profile.jpg'

const buttonLinks = [
  { icon: HomeIcon, href: '#' },
  { icon: DirectIcon, href: '#' },
  { icon: NewPostIcon, href: '#' },
  { icon: FindPeopleIcon, href: '#' },
  { icon: ActivityFeedIcon, href: '#' },
]

const Header = () => {
  return (
    <nav className="flex h-[60px] items-center justify-between border-b px-5 shadow-sm">
      <div className="flex items-end">
        <Link href="/">
          <a>
            <LogoImage className="fill-dark text-dark" />
          </a>
        </Link>

        <button className="flex h-9 items-center p-2">
          <DownChevronIcon />
        </button>
      </div>

      <div className="hidden h-9 max-w-[268px] flex-1 cursor-text items-center rounded-lg bg-[#efefef] px-4 sm:flex">
        <SearchIcon className="mr-3" />
        <button className="cursor-text border-0 bg-inherit text-[#8e8e8e]">
          Search
        </button>
      </div>

      <div className="flex gap-x-6 pl-6">
        {buttonLinks.map((item, index) => {
          const { icon: Component } = item
          return <button key={index}>{<Component />}</button>
        })}

        <button className="cursor-pointer overflow-hidden rounded-full">
          <Image className="h-6 w-6" src={ProfileImage} />
        </button>
      </div>
    </nav>
  )
}

export default Header

import Image from 'next/future/image'
import LogoImage from './logo.svg'
import DownChevronIcon from './down-chevron.svg'
import SearchIcon from './search.svg'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className="flex h-[60px] items-center justify-between border-b px-5">
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
      <div className="hidden h-9 w-56 cursor-text items-center rounded-lg bg-[#efefef] px-4 sm:flex">
        <SearchIcon className="mr-3" />
        <button className="cursor-text border-0 bg-inherit text-[#8e8e8e]">
          Search
        </button>
      </div>
    </nav>
  )
}

export default Header

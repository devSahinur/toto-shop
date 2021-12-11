import Link from "next/link"
import Image from 'next/image'
import { useRouter} from 'next/router';

function Header() {
  const router = useRouter();
    return (
      <header className="py-4 shadow-sm bg-pink-100 lg:bg-white">
      <div className="container flex items-center justify-between">
          {/* logo */}
          <div className="block w-32">
                   <Image
                        onClick={() => router.push('/')}
                        src='https://i.ibb.co/MBs637b/logo-tot.png'
                        width={150}
                        height={40}
                        objectFit="contain"
                        className='cursor-pointer'
                    />
          </div>

          {/* searchbar */}
          <div className="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
              <span className="absolute left-4 top-3 text-lg text-gray-400">
                  <i className="fas fa-search"></i>
              </span>
              <input type="text"
                  className="pl-12 w-full border border-r-0 border-primary py-3 px-3 rounded-l-md focus:ring-primary focus:border-primary"
                  placeholder="search"/>
              <button type="submit"
                  className="bg-primary border border-primary text-white px-8 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition">
                  Search
              </button>
          </div>

          {/* navicons */}
          <div className="space-x-4 flex items-center text-center">
              <a href="" className="block text-center text-gray-700 hover:text-primary transition relative">
                  <span
                      className="absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">5</span>
                  <div className="text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div className="text-xs leading-3">Wish List</div>
              </a>
              <a href=""
                  className="lg:block text-center text-gray-700 hover:text-primary transition hidden relative">
                  <span
                      className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">3</span>
                  <div className="text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                   </svg>
                  </div>
                  <div className="text-xs leading-3">Cart</div>
              </a>
              <a href="" className="block text-center text-gray-700 hover:text-primary transition">
                  <div className="text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="text-xs leading-3">Account</div>
              </a>
          </div>

      </div>
  </header>
    )
}

export default Header

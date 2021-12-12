import {ArrowRightIcon} from '@heroicons/react/solid'
import Link from 'next/link'


function AboutBanner({bg,Icon,text}) {
    return (
        <div className="w-full min-h-[400px] bg-no-repeat" style={{backgroundImage:`url(${bg})`,backgroundSize:'cover',backgroundPosition:'top center'}}>
            <div className='container mx-auto max-w-7xl py-4 pt-[150px] grid place-content-center sm:pt-[130px]'>
                {/* banner contant */}
                <h1 className='text-center pb-3 text-3xl text-white uppercase'>{text}</h1>
                <div className='flex items-center space-x-4 text-gray-200'>
                    <Link href='/'><Icon className='h-6 cursor-pointer text-primary' /></Link>
                    <ArrowRightIcon className='h-6 cursor-pointer' />
                    <h3 className='font-semibold text-xl'>{text}</h3>
                </div>
            </div>
        </div>
    )
}

export default AboutBanner

import {ArrowRightIcon} from '@heroicons/react/solid'
import Link from 'next/link'


function AboutBanner({bg,Icon,text}) {
    return (
        <div className="w-full min-h-[400px]" style={{backgroundImage:`url(${bg})`,backgroundRepeat:'no-repet',backgroundSize:'cover'}}>
            <div className='container mx-auto max-w-7xl py-4 grid place-content-center sm:pt-[130px]'>
                {/* banner contant */}
                <div className='flex items-center space-x-4 text-gray-200'>
                    <Link href='/'><Icon className='h-6 cursor-pointer' /></Link>
                    <ArrowRightIcon className='h-6 cursor-pointer' />
                    <h3 className='font-semibold text-xl'>{text}</h3>
                </div>
            </div>
        </div>
    )
}

export default AboutBanner

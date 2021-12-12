import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'



function SingleTeam({id,image,name,status,fbLink,insLink,twiLink}) {
    return (
        <div key={id} className='px-2 py-4 pb-0 border shadow hover:shadow-md mr-3'>

            {/* for fontawesome icon in Head */}
            <Head>
            <title>My page title</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
        </Head>

            <div className='w-full relative overflow-hidden group cursor-pointer'>
                <Image src={image} alt='' width={335} height={350} className='object-cover group-hover:blur-sm' />
                {/* <Image src={image} alt='' width={335} height={350} className='object-contain' /> */}
                <div className='absolute left-[40px] sm:left-[90px] md:left-[80px] xl:left-[70px] -bottom-16 group-hover:bottom-16 transition-all ease-in-out cursor-pointer space-x-4 text-white'>
                    <a className=' bg-[#3B5998] px-2 py-1 rounded-md' href={fbLink}><i class="fab fa-facebook"></i></a>
                    <a className='bg-[#00ACEE] px-2 py-1 rounded-md' href={insLink}><i class="fab fa-instagram"></i></a>
                    <a className=' bg-[#D53982] px-2 py-1 rounded-md' href={twiLink}><i class="fab fa-twitter"></i></a>
                </div>
            </div>

            {/* user info */}
            <div className='px-4 text-center py-5 pb-6'>
                <h1 className='text-xl font-semibold'>{name}</h1>
                <p className='text-md text-gray-700'>{status}</p>
            </div>
        </div>
    )
}

export default SingleTeam

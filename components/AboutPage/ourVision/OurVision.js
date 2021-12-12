import Image from 'next/image'
import {LinkIcon} from '@heroicons/react/solid'
import VisionSingleLi from './VIsitionSingleLi/VisionSingleLi'


function OurVision() {
    return (
        <section className="grid grid-cols-1 xl:grid-cols-2 px-3 md:px-1 pb-10">
            {/* vision section left image */}
            <div className='w-full max-w-fit mx-auto'>
                <Image src="/img/about-img-2.jpg" width={700} height={500} className="object-contain mx-auto md:mx-0 w-full h-full" />
                {/* <Image src="/img/about-img-2.jpg" width={500} height={400} className="object-contain" /> */}
            </div>

            {/* vision section right */}
            <div className='xl:pl-10 space-y-4 pt-4 xl:pt-0'>
                <p className='text-primary uppercase font-poppins'>our VIsion</p>
                <h1 className='text-2xl sm:text-3xl uppercase font-light pb-2' style={{lineHeight: '50px'}}>our vision is simple - we exist to accelerate customers' progress</h1>
                <p className='text-md pr-12 text-gray-800' style={{lineHeight: '30px'}}>We design and delever our customers' degital transformation by bringing together their vision with our industry knowledge and deep technologcal expertise. We design and delever our customers' degital transformmation</p>
                {/* ul li */}
                <ul className='pt-4 space-y-1'>
                    <VisionSingleLi Icon={LinkIcon} text="We build strong relationships" />
                    <VisionSingleLi Icon={LinkIcon} text=" We encourage intiative and provide opportunity" />
                    <VisionSingleLi Icon={LinkIcon} text=" We embrace change and creativity" />
                    <VisionSingleLi Icon={LinkIcon} text="We champan an environment of honesty" />
                    <VisionSingleLi Icon={LinkIcon} text="We champian an environment of honesty" />
                </ul>
            </div>

        </section>
    )
}

export default OurVision

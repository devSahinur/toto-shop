import HistoryPreview from './historyPreview/HistoryPreview';
import Image from 'next/image'


function OurHistory() {


    const data =[
        {id: 1,number:'12',text: 'Years Exprience'},
        {id: 2,number:"20k",text: 'Happy Customer'},
        {id: 3,number:"100%",text: 'Clients Satisfaction'}
    ]

    return (
        <section className='grid grid-cols-1 xl:grid-cols-2 pt-10 px-3'>
            {/* history left */}
            <div className='md:pr-4 space-y-4'>
                <p className='text-primary uppercase font-poppins'>our History</p>
                <h1 className='text-3xl sm:text-4xl uppercase font-medium' style={{lineHeight: '45px'}}>Creative and new fashion trends collection</h1>
                <p className='text-md pr-12 text-gray-800' style={{lineHeight: '30px'}}>Fashion is a potent visual marker of our times,"says Caroilne Stevenson,head of cultural and... "Trend analysis of any given era will reveal society's values and aspirataions"... The urge to creative expression runs deep</p>
                {/* preview div */}
                <div className='grid grid-cols-3 gap-x-2 pt-6'>
                   {data?.map(({id,number,text})=>(
                        <HistoryPreview id={id} number={number} text={text}  />
                   ))}
                </div>
            </div>

            {/* history right */}
            <div className='w-full'>
                <Image src='/img/about-img.jpg' className='w-full h-full object-contain' height={450} width={700} />
                {/* <Image src='/img/about-img.jpg' /> */}
            </div>

        </section>
    )
}

export default OurHistory

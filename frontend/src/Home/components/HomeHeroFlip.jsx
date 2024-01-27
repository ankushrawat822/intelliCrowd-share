import React from 'react'

const HomeHeroFlip = () => {
  return (
    <>
          {/* cards div */}
          <div className='flex bg-[#161616] flex-col sm:flex-row flex-wrap items-center justify-center gap-10 pt-10 pb-10 px-3'>
                {/* card 1 */}
                <div className='hover-drop-shadow relative emerg-tech-card-1-front-img'>
                    {/* front div text  starts*/}
                    <div className='absolute px-3 left-0 right-0 ml-auto mr-auto w-full flex flex-col items-center justify-center top-4  text-white '>
                        <div className='emerg-tech-card-1-white-tick-img'></div>
                        <div>
                            <p className='  font-semibold  text-[24px] text-start my-3'>Text Annotation</p>
                            <p className='text-start text-white text-[16px] mb-10'>Craft clear captions, judge texts, refine keywords, make words shine</p>
                          
                        </div>

                    </div>
                    {/* front div text  ends*/}
                    <div className='emerg-tech-card-1-back-img flex items-center justify-center'>
                        <p className='text-center text-white text-[20px] px-2 font-semibold mb-10'> Contribute impactful descriptions, summaries, and analyses of texts</p>
                    </div>
                </div>

                 {/* card 2 */}
                 <div className='hover-drop-shadow relative emerg-tech-card-2-front-img'>
                    {/* front div text  starts*/}
                    <div className='absolute px-3 left-0 right-0 ml-auto mr-auto w-full flex flex-col items-center justify-center top-4  text-white '>
                        <div className='emerg-tech-card-1-white-tick-img'></div>
                        <div>
                            <p className='  font-semibold  text-[24px] text-start my-3'>Image Annotation</p>
                            <p className='text-start text-white text-[16px] mb-10'>Point out objects, draw bounding boxes, make pixels insightful.</p>
                          
                        </div>

                    </div>
                    {/* front div text  ends*/}
                    <div className='emerg-tech-card-1-back-img flex items-center justify-center'>
                        <p className='text-center text-white text-[20px] px-2 font-semibold mb-10'>Be the pixel whisperer! Annotate details, classify objects, train AI to "see" like you do.</p>
                    </div>
                </div>

                 {/* card 3*/}
                 <div className='hover-drop-shadow relative emerg-tech-card-3-front-img'>
                    {/* front div text  starts*/}
                    <div className='absolute px-3 left-0 right-0 ml-auto mr-auto w-full flex flex-col items-center justify-center top-4  text-white '>
                        <div className='emerg-tech-card-1-white-tick-img'></div>
                        <div>
                            <p className='  font-semibold  text-[24px] text-start my-3'>Video Annotation</p>
                            <p className='text-start text-white text-[16px] mb-10'>Tag scenes, analyze emotions,judge quality, unlock video's hidden meaning.</p>
                          
                        </div>

                    </div>
                    {/* front div text  ends*/}
                    <div className='emerg-tech-card-1-back-img flex items-center justify-center'>
                        <p className='text-center text-white text-[20px] px-2 font-semibold mb-10'> Label actions, categorize content, help AI understand moving pictures.</p>
                    </div>
                </div>

                 {/* card 4 */}
                 <div className='hover-drop-shadow relative emerg-tech-card-4-front-img'>
                    {/* front div text  starts*/}
                    <div className='absolute px-3 left-0 right-0 ml-auto mr-auto w-full flex flex-col items-center justify-center top-4  text-white '>
                        <div className='emerg-tech-card-1-white-tick-img'></div>
                        <div>
                            <p className='  font-semibold  text-[24px] text-start my-3'>Audio Annotation</p>
                            <p className='text-start text-white text-[16px] mb-10'>Transcribe words, capture accents, turn voices into data.</p>
                          
                        </div>

                    </div>
                    {/* front div text  ends*/}
                    <div className='emerg-tech-card-1-back-img flex items-center justify-center'>
                        <p className='text-center text-white text-[20px] px-2 font-semibold mb-10'>Transcribe speeches, identify sounds, make the world accessible through audio data</p>
                    </div>
                </div>

            </div>
    </>
  )
}

export default HomeHeroFlip
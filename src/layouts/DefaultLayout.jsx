import React from 'react'

// 기본 레이아웃 작성용 컴포넌트
// 합성(Composition)
const DefaultLayout = ( {children} ) => {
    return (
        <div className='w-full h-full overflow-y-scroll'>
            <div className='max-w-xl mx-auto min-w-[20rem]'>
                { children }
            </div>
        </div>
    )
}

export default DefaultLayout
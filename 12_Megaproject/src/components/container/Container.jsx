import React from 'react'
function Components({children})
{
    return (
        <> 
        <div  className='w-full max-w-7xl mx-auto px-4'>
            {children}
            </div>
        </>
    )
}
export default Components
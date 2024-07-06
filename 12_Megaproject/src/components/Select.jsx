import React,{useId} from 'react'
function Select (
    { options,
        className='',
        Label,
        ...props

    },ref
)
{  const id=useId()
    return (
    <div className='w-full'>
     
       { Label && <label className={``} htmlFor={id}  ></label>}
       <select
        className={`px-3 py-2 rounded-lg bg-white test-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} 
        id={id} 
        {...props}
        ref={ref}
       >
           {options?.map((item)=>(
            <option key={item} value={item}>{item}</option>
           ))}
       </select>
       
    </div>
)

}
export default React.forwardRef(Select)

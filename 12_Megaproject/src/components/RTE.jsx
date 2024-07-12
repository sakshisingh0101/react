import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
function RTE({name ,control , label,defaultValue=""})

{ const api='wfvnt82vncd2lj2kxi7v0ivzbzquclyqpuqsrmrmnhdws85q'
   
    return ( 
        
        <div  className='w-full'>
            {label&&<label className='inline-block mb-1 pl-1'>{label}</label>}
            <Controller
              name={name||'content'}
              control={control}
              render={({field:{onChange}})=>{

                return(
                <Editor>
                    apiKey={`wfvnt82vncd2lj2kxi7v0ivzbzquclyqpuqsrmrmnhdws85q`}
                      initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            forceReadOnly:false,
         
            
        }}
        onEditorChange={onChange}
                </Editor>)
              }}

            />
        </div>
        
    )
}
export default RTE
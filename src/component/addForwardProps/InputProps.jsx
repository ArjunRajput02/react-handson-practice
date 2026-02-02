export default function InputProps({richText,...props}) {
    if(richText){
        return <textarea {...props}/>
    }
    return <input {...props}/>
}
import {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Create = () => {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('IGX')
    const [isPending,setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit =(e)=>{
        e.preventDefault()
        const blog={ title,body,author }
        setIsPending(true)

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blogpost added')
            setIsPending(false)
        })
        setTimeout(() => {
            history.push('/')
        }, 1500);
        
    }

    return ( 
        <div className="create">
            <h2>Add a new blog post</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Blog Title">Blog Title :</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                />
                <label htmlFor="Blog Body">Blog Body :</label>
                <textarea 
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                > </textarea>
                <label htmlFor="Author">Blog Author :</label>
                <select value={author}
                onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="ZTF">ZTF</option>
                    <option value="IGX">IGX</option>
                    
                </select>
                {!isPending && <button>Add Post</button>}
                {isPending && <button disabled>Adding Post ...</button>}
            </form>
        </div>
     );
}
 
export default Create;

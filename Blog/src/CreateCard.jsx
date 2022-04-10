import React,{useState} from "react";

export default function CreateCard({setTitle, setContent, cookie}) {

    if(cookie==true){
        const [formTitle, setFormTitle] = useState('');
        const [formContent, setFormContent] = useState('');
    
    
        const handleTitleChange = e => {
            setFormTitle(e.target.value);
        }
    
        const handleContentChange = e => {
            setFormContent(e.target.value);
        }
        
        const [counter, setCounter] =React.useState(1);
    
        const handleSubmit = event => {
            event.preventDefault();
            setCounter(counter + 1);
            setTitle(formTitle);
            setContent(formContent);
        }
    
        return (
            <div>            
                <h1 className='text-center'>Création de posts</h1>
                <form className="my-5 mx-auto" style={{maxWidth: '600px'}} onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" required="required" onChange={handleTitleChange} value={formTitle}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">Content</label>
                        <textarea type="text" className="form-control" rows="5" required="required" id="content" onChange={handleContentChange} value={formContent}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
    
        )
    }else{
        return(
            <></>
        )
    }

    

}
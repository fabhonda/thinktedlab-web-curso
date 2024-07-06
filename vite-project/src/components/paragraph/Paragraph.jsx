import { useEffect, useState } from 'react'
import './Paragraph.css'
export default function Paragraph({infParagraph, titlePage}){
    const [textItem, setTextItem] = useState('texto inicial')
    const [count, setCount] = useState(0)
    const handleCount = ()=>{
        setCount(count+1)
    }
    useEffect(() => {
        handleCount()
      }, [textItem]);
    return(
        <div className='container-paragraphh'>
            <h1>{titlePage}</h1>
            <p>{infParagraph}</p>
            <div style={{width:'100%'}}>
                <img src='https://images.squarespace-cdn.com/content/v1/606d4deb4db8c15ea53b3624/1617783322870-GJ9WNZB821ZYWEIRFMEU/banner-3.jpg?format=2500w'
                width={400}
                />
            </div>
            <label>{count}</label>
            <input type='' value={textItem} onChange={(e)=>setTextItem(e.target.value)}/>
        </div>
    )
}
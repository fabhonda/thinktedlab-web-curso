import Paragraph from "../../components/paragraph/Paragraph";
import './ContactUs.css'
export default function ContactUs(){
    const [count, setCount] = useState(0)
        const item = "E o mais próximo é no Eldorado, bem pertinho."
        const handleCount = ()=>{
            setCount(count+1)
    }

    return(
        <div className='container-page'>
            <Paragraph   infParagraph='meu paragrafo inteiro ....'  titlePage='Esse é o titulo da pagina'/>
        </div>
        
    )
}
import {useState} from 'react'

export default function Accordion({text , title}) {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='' onClick={() => setIsOpen(!isOpen)}>
        <div className='flex'>
            <h1>{title}</h1>
            <img src={`/images/icon-${isOpen ? "minus" : "plus"}.svg`} className='ml-auto'/>
        </div>
        {isOpen && <div>{text}</div>}
        
    </div>
  )
}

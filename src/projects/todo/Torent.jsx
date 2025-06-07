import { useState } from "react"

export const Todo=()=>{
    const[inputValue,setInputvalue]=useState("")
    const[task,setTask]=useState([])
    const[dateTime,setDateTime]=useState("")
    const handleInputValue=(value)=>{
        setInputvalue(value)
    }

    const handleFormSubmit=(event)=>{
        event.preventDefault()

        if(!inputValue) return;

        if(task.includes(inputValue)) return;

        setTask((previous)=>[...previous,inputValue])

        setInputvalue("")



    }
    setInterval(()=>{
        const now=new Date()
        const formattedDate=now.toLocaleDateString;
        const formattedTime=now.toLocaleTimeString;
        setDateTime(`${formattedDate}-${formattedTime}`)
    })

    return(
        <>
        <section>
            <header>
                <h1>TODO LIST</h1>
                <h2>{dateTime}</h2>
            </header>

            <section>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type='text' value={inputValue} onChange={(event)=>handleInputValue(event.target.value)} />
                    </div>

                    <div>
                        <button type="submit">Click</button>
                    </div>
                </form>
            </section>

            <section>
                <ul>
                    {task.map((curElem,index)=>{
                        return(
                            <li key={index}>{curEem}</li>
                        )
                    })}
                </ul>
            </section>
        </section>
        </>
    )
}
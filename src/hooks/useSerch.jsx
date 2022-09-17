import React,{ useState } from 'react'
import { ReactComponent as Serch } from '../images/header/serch.svg'
import serchSvg from '../images/header/serchSvg.svg'


const useSerch = (serch, setSerch, setSerchValue) => {
    const [value, setValue] = useState('')
    const onKeyDown = (event) => {
        if(event.key === 'Enter'){
            setSerchValue(value)
            setValue('')
        }
    }

    const sercHeandler = () => {
        setSerch(false)
        setValue('')
    }

    if (serch) {
        return (
            <input
                onBlur={() => sercHeandler()}
                style={{ backgroundImage: `url(${serchSvg})` }}
                value={value}
                onChange={(event => setValue(event.target.value))}
                onKeyDown={(event) => onKeyDown(event)}
                className="serch-active" placeholder='Поиск по товарам'>
            </input>
        )

    }
    else {
        return (
            <div onClick={() => setSerch(true)} className="header__profile-wrapper">
                <Serch fill='transparent' className='serch' stroke='current' />
            </div>
        )
    }
}

export default useSerch


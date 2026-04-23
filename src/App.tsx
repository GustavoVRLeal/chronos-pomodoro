import { Container } from './components/Container'
import { CountDown } from './components/CountDown'
import { Cycles } from './components/Cycles'
import { DefaultInput } from './components/DefaultInput'
import { DefaultButton } from './components/DefaultButton'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { Footer } from './components/Footer'

import './styles/global.css'
import './styles/theme.css'
import { PlayCircleIcon } from 'lucide-react'

export function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>
                        
            <Container>
                <Menu/>
            </Container>
                
            <Container>
                <CountDown/>
            </Container>
                
            <Container>
                <form className="form" action="">
                    <div className='formRow'>
                        <DefaultInput labelText='Desafio' id='meuInput' type='text' placeholder='Digite algo...'/>
                    </div>
                
                    <div className='formRow'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className='formRow'>
                        <Cycles/>
                    </div>

                    <div className='formRow'>
                        <DefaultButton icon={<PlayCircleIcon/>}/>
                    </div>
                </form>
            </Container>

            <Container>
                <Footer/>
            </Container>
        </>  
    )
}
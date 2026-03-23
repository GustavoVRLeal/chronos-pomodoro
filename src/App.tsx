import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';
import './styles/global.css'
import './styles/theme.css'

export function App() {
    return (
        <>
            <Heading>
                Ola mundo!
                <button>
                    <TimerIcon />
                </button>
            </Heading>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum non beatae consequatur? Facilis culpa quia recusandae repudiandae illum repellendus inventore pariatur labore, eos eveniet eum quis vitae, enim, ratione dolorem.</p>
        </> 
    )
}
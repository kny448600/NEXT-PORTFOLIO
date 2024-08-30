import Lottie from 'react-lottie-player';
import lottiejson from '/public/404.json';

export default function Animation() {
    return (
    <Lottie
        Loop
        animationdata={lottiejson}
        play
    />
    )
}
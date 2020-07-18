import MediaPlayer from '@asaeljs/mediaplayer';
import Autoplay from '@asaeljs/mediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@asaeljs/mediaplayer/lib/plugins/AutoPause';
import Ads from '@asaeljs/mediaplayer/lib/plugins/Ads';

const video = document.querySelector('video')
const playButton: HTMLElement = document.querySelector('#playButton')
const mutedButton: HTMLElement = document.querySelector('#muteButton')

const player = new MediaPlayer({
    el: video,
    plugins: [
        new Autoplay(),
        new AutoPause(),
        new Ads(),
    ]
})
playButton.onclick = () => player.togglePaly()
mutedButton.onclick = () => player.toggleMuted()

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}

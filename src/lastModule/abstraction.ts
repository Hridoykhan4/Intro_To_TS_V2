// oop abstraction

// implementation is hidden

/* 
    1. Interface
    2. abstract class
*/

// interface MediaPlayer {
//     play() : void
//     pause() : void
//     stop() : void
// }

// class MusicPlayer implements MediaPlayer {
//       pause() {
//           console.log('Pause the video');
//       }
//       play() {
//           console.log('Pause the video');
//       }
//       stop() {
//           console.log('Pause the video');
//       }
// }

// const mediaStatus : MediaPlayer = {
//     pause() {
//         console.log('Pause the video');
//     },
//     play() {
//         console.log('Pause the video');
//     },
//     stop() {
//         console.log('Pause the video');
//     },
// }


abstract class MediaPlayer {
    abstract play(): void
    abstract pause(): void
    abstract stop(): void
}

class MusicPlayer extends MediaPlayer {
    pause(): void {
        console.log('Pause');
    }
    play(): void {
        console.log('play...........');
    }
    stop(): void {
        console.log('stop');
    }
}

const music1 = new MusicPlayer()
music1.play()
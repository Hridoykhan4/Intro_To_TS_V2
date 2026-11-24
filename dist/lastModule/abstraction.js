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
class MediaPlayer {
}
class MusicPlayer extends MediaPlayer {
    pause() {
        console.log('Pause');
    }
    play() {
        console.log('play...........');
    }
    stop() {
        console.log('stop');
    }
}
const music1 = new MusicPlayer();
music1.play();
export {};

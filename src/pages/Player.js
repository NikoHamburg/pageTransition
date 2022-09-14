import { Lightning, Router, VideoPlayer } from "@lightningjs/sdk";

class Player extends Lightning.Component {
  _init() {
    VideoPlayer.consumer(this);
    VideoPlayer.size(1920, 1080);
    VideoPlayer.position(0, 0);
    VideoPlayer.open(
      "http://vf-maf-lng.s3.eu-central-1.amazonaws.com/LNG_MVP_Big_Bunny_AWS_Test.mp4"
    );
  }

  _handleRight() {
    const videoElement = document.getElementsByTagName('video')[0];
    console.log(videoElement);
    videoElement.style.transition = `all 0.5s ease-out`;
    videoElement.style.transform = 'translateX(-1920px)';
    // VideoPlayer.position(0, 0);
    // Router.navigate("Player2");
  }

  pageTransition() {
    return "left";
  }
}

export { Player };

import { Lightning, Router, VideoPlayer } from "@lightningjs/sdk";

class Player2 extends Lightning.Component {
  _init() {
    VideoPlayer.consumer(this);
    VideoPlayer.size(1650, 720);
    VideoPlayer.position(200, 200);
    VideoPlayer.open(
      "http://vf-maf-lng.s3.eu-central-1.amazonaws.com/video-30sec.mp4"
    );
  }

  _handleRight() {
    Router.navigate("Player");
  }

  pageTransition() {
    return "left";
  }
}

export { Player2 };

/**
 * Created by mustafa on 8/18/16.
 */


class LimePlayer {


  constructor(elementId) {

    this.elementId = elementId;

    this.player = document.getElementById(elementId);

    this.mediaElement = document.createElement('video');
    this.mediaElement.setAttribute('controls','controls');
    this.player.appendChild(this.mediaElement);

    this.player.classList.add('lp-video');


  }

  src(mediaUrl){
    this.mediaElement.src = mediaUrl;
  }


}
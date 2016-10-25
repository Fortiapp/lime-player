/**
 * Created by mustafa on 8/18/16.
 */


class LimePlayer {

  constructor(elementId) {

    this.paused = true;
    this.videoHasStarted = false;
    this.elementId = elementId;

    this.player = document.getElementById(elementId);

    this.mediaElement = document.createElement('video');
    this.mediaElement.setAttribute('controls', 'controls');
    this.player.appendChild(this.mediaElement);

    this.player.classList.add('lp-video');

    return this;

  }

  /*
   * Directly set the media element source
   *
   * @param {string} mediaUrl
   */
  src(mediaUrl) {
    this.mediaElement.src = mediaUrl;
    return this;
  }


  play() {

    this.mediaElement.play();
    this.videoHasStarted = true;
    this.paused = false;
    return this;

  }


  pause() {

    if (!this.paused) {
      this.mediaElement.pause();
      this.paused = true;
    }

    return this;
  }


}
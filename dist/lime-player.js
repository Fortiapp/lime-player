'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by mustafa on 8/18/16.
 */

var LimePlayer = function () {
  function LimePlayer(elementId) {
    _classCallCheck(this, LimePlayer);

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


  _createClass(LimePlayer, [{
    key: 'src',
    value: function src(mediaUrl) {
      this.mediaElement.src = mediaUrl;
      return this;
    }
  }, {
    key: 'play',
    value: function play() {

      this.mediaElement.play();
      this.videoHasStarted = true;
      this.paused = false;
      return this;
    }
  }, {
    key: 'pause',
    value: function pause() {

      if (!this.paused) {
        this.mediaElement.pause();
        this.paused = true;
      }

      return this;
    }
  }]);

  return LimePlayer;
}();
//# sourceMappingURL=lime-player.js.map

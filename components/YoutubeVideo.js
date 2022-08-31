import React from "react";
import YouTube from "react-youtube";

export default class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <YouTube videoId="sYD6duYAlv4" className="container" opts={opts} title="Orizon Qatar Agance."  />
    );
  }

}

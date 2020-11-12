import { useEffect } from 'react';
import 'lite-youtube-embed/src/lite-yt-embed.css';

function EmbedYoutube(props) {
  useEffect(() => {
    // to prevent SSR bug.
    import('lite-youtube-embed/src/lite-yt-embed.js');
  }, []);

  return <lite-youtube {...props}></lite-youtube>;
}

export default EmbedYoutube;

import { useEffect } from 'react';
import mermaid from 'mermaid/dist/mermaid.min.js';

function EmbedDiagram(props) {
  const { chart } = props;

  useEffect(() => {
    console.log('yolo');
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded()
  }, []);

  // useEffect(() => {
  //   mermaid.initialize({ startOnLoad: true });
  // }, [chart]);

  console.log('dah');

  return <div className="mermaid">{chart}</div>;
}

export default EmbedDiagram;

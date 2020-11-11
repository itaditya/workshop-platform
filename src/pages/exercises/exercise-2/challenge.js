import { useState, useEffect } from 'react';

function Challenge() {
  const [stateImgList, setImgList] = useState([]);
  useEffect(() => {
    fetch('http://localhost:9191/gallery')
      .then((res) => res.json())
      .then((data) => {
        setImgList(data);
      });
  }, []);

  return (
    <div>
      <h3 className="text-center font-bold text-3xl mt-6 mb-4">Image Gallery Challenge</h3>
      <div className="grid grid-cols-2">
        {stateImgList.map((imgUrl) => (
          <img src={imgUrl} />
        ))}
      </div>
    </div>
  );
}

export default Challenge;

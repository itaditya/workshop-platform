import { useState, useEffect } from 'react';

function Challenge() {
  const [stateImgList, setImgList] = useState([]);

  useEffect(() => {
    fetch(`${window.baseUrl}/gallery`)
      .then((res) => res.json())
      .then((data) => {
        setImgList(data);
      });
  }, []);

  return (
    <div className="pt-8">
      <h3 className="text-center font-bold text-3xl mb-6">Image Gallery Challenge</h3>
      <div className="grid grid-cols-2">
        {stateImgList.map((imgUrl, index) => (
          <img src={imgUrl} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Challenge;

import axios from 'axios';
import React from 'react';

const App = () => {
  // const handleGetData = () => {
  //   // then ... catch
  //   axios
  //     .get('https://6516e61d09e3260018ca7474.mockapi.io/api/v1/products')
  //     .then((res) => res.data)
  //     .then((products) => {
  //       console.log(products);
  //     });
  // };
  const handleGetData = async () => {
    // async await
    const { data: products } = await axios.get(
      'https://6516e61d09e3260018ca7474.mockapi.io/api/v1/products'
    );
    console.log(products);
  };
  return (
    <div className="max-w-[1280px] mx-auto h-[100vh] h-full w-full flex justify-center items-center gap-4">
      <button
        className="px-4 py-2 border rounded-lg text-white bg-green-400"
        onClick={handleGetData}
      >
        Get data
      </button>
      <button
        className="px-4 py-2 border rounded-lg text-white bg-blue-400"
        onClick={handleGetData}
      >
        Add one data
      </button>
      <button
        className="px-4 py-2 border rounded-lg text-white bg-red-400"
        onClick={handleGetData}
      >
        Delete one data
      </button>
    </div>
  );
};

export default App;

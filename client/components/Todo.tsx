import React, { useState } from "react";

const Todo = ({ data, handleDelete, handleUpdate }: any) => {
  const [text, settext] = useState("");
  const [edit, setedit] = useState(false);

  return (
    <div className="flex flex-wrap m-4">
      <div className="">
        <div className="bg-gray-100 bg-opacity-75 px-4 py-4 flex flex-row rounded-lg overflow-hidden text-center">
          <h2 className="tracking-widest text-xl title-font font-medium text-black">
            {data.text}
          </h2>
          <svg
            onClick={() => handleDelete(data._id)}
            className="ml-4 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
          </svg>

          <svg
            onClick={() => {
              setedit(true), settext(data.text);
            }}
            className="ml-4 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M373.1 24.97C401.2-3.147 446.8-3.147 474.9 24.97L487 37.09C515.1 65.21 515.1 110.8 487 138.9L289.8 336.2C281.1 344.8 270.4 351.1 258.6 354.5L158.6 383.1C150.2 385.5 141.2 383.1 135 376.1C128.9 370.8 126.5 361.8 128.9 353.4L157.5 253.4C160.9 241.6 167.2 230.9 175.8 222.2L373.1 24.97zM440.1 58.91C431.6 49.54 416.4 49.54 407 58.91L377.9 88L424 134.1L453.1 104.1C462.5 95.6 462.5 80.4 453.1 71.03L440.1 58.91zM203.7 266.6L186.9 325.1L245.4 308.3C249.4 307.2 252.9 305.1 255.8 302.2L390.1 168L344 121.9L209.8 256.2C206.9 259.1 204.8 262.6 203.7 266.6zM200 64C213.3 64 224 74.75 224 88C224 101.3 213.3 112 200 112H88C65.91 112 48 129.9 48 152V424C48 446.1 65.91 464 88 464H360C382.1 464 400 446.1 400 424V312C400 298.7 410.7 288 424 288C437.3 288 448 298.7 448 312V424C448 472.6 408.6 512 360 512H88C39.4 512 0 472.6 0 424V152C0 103.4 39.4 64 88 64H200z" />
          </svg>
        </div>

        {edit && (
          <div className="flex flex-col">
            <input
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-4"
              type="text"
              value={text}
              onChange={(e) => settext(e.target.value)}
            />
            <button
              onClick={() => {
                handleUpdate(data._id, text), setedit(false);
              }}
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-4"
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;

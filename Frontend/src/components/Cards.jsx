// import React from 'react';

// function Cards({ item }) {
//   return (
//     <>
//       <div className="mt-4 my-3 p-3">
//         <div className="card border w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
//           <figure><img src={item.image} alt={item.title} /></figure>
//           <div className="card-body">
//             <h2 className="card-title">
//               {item.title}
//               <div className="badge bg-orange-500 text-white">{item.category}</div>
//             </h2>
//             <h3 className="text-md font-semibold">By {item.author}</h3>
//             <p>{item.description}</p>
//             <div className="card-actions justify-between">
//               <div className="badge badge-outline">Rs.{item.price}</div>
//               <div className="badge badge-outline cursor-pointer px-2 py-1 hover:bg-orange-500 hover:text-white hover:scale-105 duration-200">Buy Now</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cards;

//-----------------------------------------------Above is the original working code---------------------------------

import React, { useState } from 'react';

function Cards({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const getShortDescription = (description) => {
    const maxLength = 100;
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength) + '...';
  };

  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card border w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
          <figure className="h-48 overflow-hidden">
            <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
          </figure>
          <div className="card-body flex flex-col">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-sm bg-orange-500 text-white">{item.category}</div>
            </h2>
            <h3 className="text-sm font-semibold">By {item.author}</h3>
            <p className="flex-grow">
              {isExpanded ? item.description : getShortDescription(item.description)}
              {item.description.length > 100 && (
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={toggleDescription}
                >
                  {isExpanded ? ' Show less' : ' Read more'}
                </span>
              )}
            </p>
            <div className="card-actions justify-between mt-auto">
              <div className="badge badge-outline">Rs.{item.price}</div>
              <div className="badge badge-outline cursor-pointer px-2 py-1 hover:bg-orange-500 hover:text-white hover:scale-105 duration-200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

import React, { useEffect, useState } from "react";
import { useDataProvider } from "react-admin";

// const dataProvider = {
//     getList: (resource, params) => Promise,
//     getOne: (resource, params) => Promise,
//     getMany: (resource, params) => Promise,
//     getManyReference: (resource, params) => Promise,
//     create: (resource, params) => Promise,
//     update: (resource, params) => Promise,
//     updateMany: (resource, params) => Promise,
//     delete: (resource, params) => Promise,
//     deleteMany: (resource, params) => Promise,
// }

export default function PosterList() {
  const dataProvider = useDataProvider();
  const [poster, setPoster] = useState([]);

    
    // getOne
//   useEffect(() => {
//     dataProvider
//       .getOne("posters", {
//         id: 1,
//       })
//       .then((responce) => {
//         console.log(responce.data);
//         setPoster(responce.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

    //getMany
    useEffect(() => {
      dataProvider
       .getMany("posters", {
          pagination: { page: 1, perPage: 10 },
          sort: { field: "id", order: "ASC" },
        })
       .then((responce) => {
          console.log(responce.data);
          setPoster(responce.data);
        })
       .catch((error) => {
          console.log(error);
        });
    }, []);
    
    
    
  return (
    <>
      <ul>
        <li>ID: {poster.id}</li>
        <li>Poster: {poster.poster}</li>
          </ul>
          

          <h3>List</h3>

          {poster.map(item => {
            return <li key={item.id}>{item.poster}</li>
        })}
    </>
  );
}


// export default class CustomerService {
//     getCustomersLarge() {
//         return fetch('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb').then(res => res.json())
//                 .then(d =>{
//                      return d.results[0]
//                 })
//     }
   
// }


const dataService = () =>{
    return fetch('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb').then(res => res.json())
    .then(d =>{
         return d.results[0]
    })
} 

export default dataService

// import PropTypes from 'prop-types'

// const Cooking = ({item}) => {

//   return (
//     <div>
//          <div className='w2/5 ml-10 p-6'>
//           <div>
//             <h2 className='text-3xl font-semibold text-center'>Want to Cook:{item.length} </h2>
//             <div>
//               <table className="table ">
//                 <thead>
//                   <tr className='text-xl'>
//                     <th>Name</th>
//                     <th>Times</th>
//                     <th>Calories</th>
//                   </tr>
//                 </thead>
//               </table>
//             </div>
//             <div>
//               {
               
//                     <div>
//                         <table className="table ">
//                       <thead>
//                         <tr className=''>
//                           <td>{item.name.slice(0, 13)} </td>
//                           <td>{item.preparing_time}</td>
//                           <td>{item.calories} </td>
//                           <button className="btn btn-accent">Preparing</button>
//                         </tr>
//                       </thead>
//                     </table>
//                     </div>

                 
                
//               }
//             </div>
//           </div>
//           <div>
//             <h2 className='text-3xl font-semibold text-center mt-8'>Currently Cooking :</h2>
//             <div>
//               <table className="table ">
//                 <thead>
//                   <tr className='text-xl'>
//                     <th>Name</th>
//                     <th>Times</th>
//                     <th>Calories</th>
//                   </tr>
//                 </thead>
//               </table>
//             </div>
//             <div>
//               {
//                 ready.map((item, idx) => (
//                   <div key={idx}>
//                     <table className="table ">
//                       <thead>
//                         <tr className=''>
//                           <td>{item.name.slice(0, 13)} </td>
//                           <td>{item.preparing_time}</td>
//                           <td>{item.calories} </td>
//                           <button className="btn btn-accent">Preparing</button>
//                         </tr>
//                       </thead>
//                     </table>

//                   </div>
//                 ))
//               }
//             </div>
//     </div>
//     </div>
//     </div>
//   )
// }

// Cooking.propTypes = {
//     cooking:PropTypes.object.isRequired
// }

// export default Cooking
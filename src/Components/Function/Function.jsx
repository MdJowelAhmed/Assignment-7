
// import PropTypes from 'prop-types'

// const Function = ({handleWantToCook}) => {
//   const {name}=handleWantToCook
//   return (
//     <div>
//        <div className='w2/5 ml-10 p-6'>
//           <div>
//             <h2 className='text-3xl font-semibold text-center'>Want to Cook: </h2>
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
//             {
//              foods.map((item,idx) =>(
//               <div key={idx}>
//                <table className="table ">
//                 <thead>
//                   <tr className=''>
//                     <td>{item.name.slice(0,13)} </td>
//                     <td>{item.preparing_time}</td>
//                     <td>{item.calories} </td>
                    
//                   </tr>
//                 </thead>
//               </table>
                
//               </div>
//              ))
//             }
//             </div>
//           </div>
   
//         )
// }

//         Function.propTypes = { 
//           handleWantToCook:PropTypes.func.isRequired
//         }

//         export default Function
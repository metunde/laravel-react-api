import { useState } from "react";


export default function Visitors(){

 const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: ""

 });

const [popup, setPopup] = useState(false);
const[token] = useState(localStorage.getItem("token"))

const showModal = ()=>{
    setPopup(true)
}

const closeModal = ()=>{
    setPopup(false)
}

const createVisitor = async (e) => {
    e.preventDefault()

    const res =await fetch("api/visitor", {
        headers:{
            Authorization: `Bearer ${token}`
        },
        method: "post",
        body: JSON.stringify(formData)
      })
      const data = await res.json();

      console.log(data)
    }



    return (
        
            <div className="">
                <header title="Visitors" />
                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <div className="flex flex-wrap items-center justify-between pb-4 space-y-4 bg-white flex-col md:flex-row md:space-y-0">
                                    <div className="mt-4 ml-5">
                                        <div className="flex items-center space-x-4">
                                        <button
                                        onClick={showModal}
                                            className="inline-flex items-center px-3 py-2 pl-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                                            type="button"
                                        >
                                            <div className="pr-1">Add</div>
                                            <svg
                                                className="w-3 h-3 mb-1 text-white me-2"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 16"
                                            >
                                                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                                            </svg>
                                        </button>
                                        <input
                                            type="search"
                                            placeholder="Search..."
                                            className="search-input border border-blue-600 rounded-lg ml-20"
                                        />
                                        </div>
                                        
                                        {popup && (
      

        <div
  id="static-modal"
  tabIndex="-1"

  className="flex overflow-y-auto overflow-x-hidden fixed top-1/2 right-1/2 left-1/2 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
>
  <div className="relative w-full max-w-2xl max-h-full p-4">
    <div className="relative bg-white rounded-lg shadow">
      <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5">
        <h3 className="text-xl font-semibold text-gray-900">
          Edit Visitor
        </h3>
        <button onClick={closeModal}
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto"
        >
          
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      <div className="p-4 space-y-4 md:p-5">
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label htmlFor="name" />
            <input
              id="name"
              type="text"
              required
              placeholder="Omoboriola Chukwudi Danjuma"
              autoComplete="off"
              value={formData.name}
              onChange={(e) =>setFormData({...formData, name:e.target.value })}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" />
            <input
              id="email"
              type="email"
              required
              placeholder="example@example.com"
              autoComplete="off"
              value={formData.email}
              onChange={(e) =>setFormData({...formData, email:e.target.value })}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="phone" />
            <input
              id="phone"
              type="text"
              required
              placeholder="07000000000"
              autoComplete="off"
              value={formData.phone}
              onChange={(e) =>setFormData({...formData, phone:e.target.value })}
            />
          </div>
          <div className="mb-5">
            <input htmlFor="company" />
            <input
              id="company"
              type="text"
              required
              placeholder="XYZ Limited"
              autoComplete="off"
              value={formData.company}
              onChange={(e) =>setFormData({...formData, company:e.target.value })}
            />
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center p-4 border-t border-gray-200 rounded-b md:p-5">
        <button onClick={createVisitor} type="submit" className="primary-btn">
          Create
        </button>
        <button className="primary-btn">
          Update
        </button>
        <button
        onClick={closeModal}
          type="button"
          className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</div>

        
      )}
                                        {/* <div
                                            id="static-modal"
                                            tabIndex="-1"
                                            aria-hidden="true"
                                            className="flex overflow-y-auto overflow-x-hidden fixed top-1/2 right-1/2 left-1/2 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                                        > */}
                                            {/* <div className="relative w-full max-w-2xl max-h-full p-4">
                                                <div className="relative bg-white rounded-lg shadow">
                                                    <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5">
                                                        <h3 className="text-xl font-semibold text-gray-900">
                                                            Edit Visitor
                                                        </h3>
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto"
                                                        >
                                                            <svg
                                                                className="w-3 h-3"
                                                                aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 14 14"
                                                            >
                                                                <path
                                                                    stroke="currentColor"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                                />
                                                            </svg>
                                                            <span className="sr-only">Close modal</span>
                                                        </button>
                                                    </div>
                                                    <div className="p-4 space-y-4 md:p-5">
                                                        <form className="max-w-sm mx-auto">
                                                            <div className="mb-5">
                                                                <label htmlFor="name" value="Full Name" />
                                                                <input
                                                                    id="name"
                                                                    type="text"
                                                                    required
                                                                    placeholder="Omoboriola Chukwudi Danjuma"
                                                                    autoComplete="off"
                                                                />
                                                            </div>
                                                            <div className="mb-5">
                                                                <input htmlFor="email" value="Email" />
                                                                <input
                                                                    id="email"
                                                                    type="email"
                                                                    required
                                                                    placeholder="example@example.com"
                                                                    autoComplete="off"
                                                                />
                                                            </div>
                                                            <div className="mb-5">
                                                                <input htmlFor="phone" value="Phone Number" />
                                                                <input
                                                                    id="phone"
                                                                    type="text"
                                                                    required
                                                                    placeholder="07000000000"
                                                                    autoComplete="off"
                                                                />
                                                            </div>
                                                            <div className="mb-5">
                                                                <input htmlFor="company" value="Company" />
                                                                <input
                                                                    id="company"
                                                                    type="text"
                                                                    required
                                                                    placeholder="XYZ Limited"
                                                                    autoComplete="off"
                                                                />
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="flex items-center justify-center p-4 border-t border-gray-200 rounded-b md:p-5">
                                                        <button
                                                            className="primary-btn"
                                                        >
                                                            Create
                                                        </button>
                                                        <button
                                                            className="primary-btn"
                                                        >
                                                            Update
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                        {/* <div className="confirmation-delete-modal" /> */}
                                    </div>
                                    {/* <label htmlFor="table-search" className="sr-only">Search</label> */}
                                {/* </div> */}
                                <table className="w-full text-sm text-left text-gray-500 rtl:text-right">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                        <tr>
                                            <th scope="col" className="p-4">
                                                <div className="flex items-center"></div>
                                            </th>
                                            <th scope="col" className="px-6 py-3">Full Name</th>
                                            <th scope="col" className="px-6 py-3">Email</th>
                                            <th scope="col" className="px-6 py-3">Phone Number</th>
                                            <th scope="col" className="px-6 py-3">Company</th>
                                            <th scope="col" className="px-6 py-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b">
                                            <td className="p-4">
                                                <div className="flex items-center"></div>
                                            </td>
                                            <td className="px-6 py-3">Full Name</td>
                                            <td className="px-6 py-3">Email</td>
                                            <td className="px-6 py-3">Phone Number</td>
                                            <td className="px-6 py-3">Company</td>
                                            <td className="px-6 py-3 flex space-x-2">
                                                <button
                                                    className="font-medium text-blue-600 hover:underline"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="font-medium text-red-600 hover:underline"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="flex justify-between p-4">
                                    <button
                                        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                                    >
                                        Previous
                                    </button>
                                    <span className="text-gray-700">Page 1 of 1</span>
                                    <button
                                        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
    );
    
}






// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { Head } from '@inertiajs/react';
// //import React, { useState } from 'react';
// import DeleteConfirmationModal from '../Components/DeleteConfirmationModal'
// import { useState } from 'react';
// import input from '../Components/InputLabel'
// import TextInput from '../Components/TextInput'
// import button from '../Components/PrimaryButton'
// import {useForm} from '@inertiajs/react';

// //import { InputLabel, TextInput, PrimaryButton, DeleteConfirmationModal } from '../Components/'; // Adjust imports based on your actual component library




// export default function Visitor() {

//     const [searchQuery, setSearchQuery] = useState('');
//     const [showModal, setShowModal] = useState(false);
//     const [editMode, setEditMode] = useState(false);
//     const [processing, setProcessing] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);
//    // const [totalPages, setTotalPages] = useState(1);
//     const [deleteModal, setDeleteModal] = useState(false);
//     const [deleteConfirmationMessage, setDeleteConfirmationMessage] = useState('');
//     // const [deleteConfirmButtonText, setDeleteConfirmButtonText] = useState('');
//     // const [deleteCancelButtonText, setDeleteCancelButtonText] = useState('');


    
//         const { data, setData,} = ({
//             full_name: '',
//             email: '',
//             phone_number: '',
//             company: '',
//         })

//         const form = useForm({ 
//             full_name: '', 
//             email: '', 
//             phone_number: '', 
//             company: '' 
//         });
    
//         const handleChange = (e) => {
//             const { name, value } = e.target;
//             setData(name, value);
//         };
    

//         const submit = () => {
           
//             setProcessing(true);
//             // Assuming you have a post function to handle form submission
//             post('/your-endpoint', data)
//                 .then(response => {
//                     // Handle success
//                 })
//                 .catch(error => {
//                     // Handle error
//                 })
//                 .finally(() => {
//                     setProcessing(false);
//                 });
//         };
//         // const submit = () => {
//         //     post('/visitors', {
//         //         onFinish: () => {
//         //             setShowModal(false); // Close the modal after submission
//         //         },
//         //     });
//         // };

//     const searchVisitors = () => {
//         // Implement search functionality
//     };

//     const updateData = () => {
//         // Implement update functionality
//     };

//     const closeModal = () => {
//         setShowModal(false);
//     };

//     const editModal = (visitor) => {
//         setEditMode(true);
//         setForm(visitor);
//         setShowModal(true);
//     };

//     const getId = (visitor) => {
//         // Implement delete functionality
//     };

//     const deleteData = () => {
//         // Implement delete functionality
//     };

//     const closedeltemodal = () => {
//         setDeleteModal(false);
//     };

//     const paginatedVisits = []; // Replace with your paginated data
   

//     return (
//         <AuthenticatedLayout
//         user={auth.user}
//         >
//                <div className="">
//          <Head title="Visitors" />

//          <div className="py-12">
//             <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
//                 <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
//                     <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//                         <div className="flex flex-wrap items-center justify-between pb-4 space-y-4 bg-white flex-col md:flex-row md:space-y-0">
//                             <div className="mt-4 ml-5">
//                                 <button
//                                     onClick={() => { setShowModal(true); setEditMode(false); }}
//                                     className="inline-flex items-center px-3 py-2 pl-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
//                                     type="button"
//                                 >
//                                     <div className="pr-1">Add</div>
//                                     <svg
//                                         className="w-3 h-3 mb-1 text-white me-2"
//                                         aria-hidden="true"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="currentColor"
//                                         viewBox="0 0 20 16"
//                                     >
//                                         <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
//                                     </svg>
//                                 </button>
//                                 <input
//                                     type="text"
//                                     value={searchQuery}
//                                     onChange={(e) => setSearchQuery(e.target.value)}
//                                     onInput={searchVisitors}
//                                     placeholder="Search..."
//                                     className="search-input rounded-lg ml-20"
//                                 />
//                                 {showModal && (
//                                     <div className="fixed inset-0 bg-black bg-opacity-50"></div>
//                                 )}
//                                 {showModal && (
//                                     <div
//                                         id="static-modal"
//                                         tabIndex="-1"
//                                         aria-hidden="true"
//                                         className="flex overflow-y-auto overflow-x-hidden fixed top-1/2 right-1/2 left-1/2 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
//                                     >
//                                         <div className="relative w-full max-w-2xl max-h-full p-4">
//                                             <div className="relative bg-white rounded-lg shadow">
//                                                 <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5">
//                                                     <h3 className="text-xl font-semibold text-gray-900">
//                                                         {editMode ? 'Edit Visitor' : 'Add Visitor'}
//                                                     </h3>
//                                                     <button
//                                                         onClick={closeModal}
//                                                         type="button"
//                                                         className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto"
//                                                     >
//                                                         <svg
//                                                             className="w-3 h-3"
//                                                             aria-hidden="true"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             fill="none"
//                                                             viewBox="0 0 14 14"
//                                                         >
//                                                             <path
//                                                                 stroke="currentColor"
//                                                                 strokeLinecap="round"
//                                                                 strokeLinejoin="round"
//                                                                 strokeWidth="2"
//                                                                 d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                                                             />
//                                                         </svg>
//                                                         <span className="sr-only">Close modal</span>
//                                                     </button>
//                                                 </div>
//                                                 <div className="p-4 space-y-4 md:p-5">
//                                                     <form className="max-w-sm mx-auto">
//                                                         <div className="mb-5">
//                                                             <InputLabel htmlFor="name" value="Full Name" />
//                                                             <TextInput
//                                                                 id="name"
//                                                                 type="text"
//                                                                 value={form.full_name}
//                                                                 onChange={handleChange()}
//                                                                 //onChange={(e) => setForm({ ...form, full_name: e.target.value })}
//                                                                 required
//                                                                 placeholder="Omoboriola Chukwudi Danjuma"
//                                                                 autoComplete="off"
//                                                             />
//                                                         </div>
//                                                         <div className="mb-5">
//                                                             <InputLabel htmlFor="email" value="Email" />
//                                                             <TextInput
//                                                                 id="email"
//                                                                 type="email"
//                                                                 value={form.email}
//                                                                 onChange={handleChange()}
//                                                                 //onChange={(e) => setForm({ ...form, email: e.target.value })}
//                                                                 required
//                                                                 placeholder="example@example.com"
//                                                                 autoComplete="off"
//                                                             />
//                                                         </div>
//                                                         <div className="mb-5">
//                                                             <InputLabel htmlFor="phone" value="Phone Number" />
//                                                             <TextInput
//                                                                 id="phone"
//                                                                 type="text"
//                                                                 value={form.phone_number}
//                                                                onChange={handleChange()}
//                                                                 //onChange={(e) => setForm({ ...form, phone_number: e.target.value })}
//                                                                 required
//                                                                 placeholder="07000000000"
//                                                                 autoComplete="off"
//                                                             />
//                                                         </div>
//                                                         <div className="mb-5">
//                                                             <InputLabel htmlFor="company" value="Company" />
//                                                             <TextInput
//                                                                 id="company"
//                                                                 type="text"
//                                                                 value={form.company}
//                                                                 onChange={handleChange()}
//                                                                 //onChange={(e) => setForm({ ...form, company: e.target.value })}
//                                                                 required
//                                                                 placeholder="XYZ Limited"
//                                                                 autoComplete="off"
//                                                             />
//                                                         </div>
//                                                     </form>
//                                                 </div>
//                                                 <div className="flex items-center justify-center p-4 border-t border-gray-200 rounded-b md:p-5">
//                                                     {!editMode ? (
//                                                         <PrimaryButton
//                                                             onClick={submit()}
//                                                             className="primary-btn"
//                                                             disabled={form.processing}
//                                                         >
                                                            
//                                                             Create
//                                                         </PrimaryButton>
//                                                     ) : (
//                                                         <PrimaryButton
//                                                             onClick={updateData}
//                                                             className="text-center"
//                                                             disabled={form.processing}
//                                                         >
//                                                             Update
//                                                         </PrimaryButton>
//                                                     )}
//                                                     <button
//                                                         onClick={closeModal}
//                                                         type="button"
//                                                         className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
//                                                     >
//                                                         Cancel
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 )}
//                                 <DeleteConfirmationModal
//                                     showModal={deleteModal}
//                                     message={deleteConfirmationMessage}
//                                     confirmButtonText={deleteConfirmButtonText}
//                                     cancelButtonText={deleteCancelButtonText}
//                                     confirmAction={deleteData}
//                                     closeModal={closedeltemodal}
//                                 />
//                             </div>
//                             <label htmlFor="table-search" className="sr-only">Search</label>
//                         </div>
//                         <table className="w-full text-sm text-left text-gray-500 rtl:text-right">
//                             <thead className="text-xs text-gray-700 uppercase bg-gray-50">
//                                 <tr>
//                                     <th scope="col" className="p-4">
//                                         <div className="flex items-center"></div>
//                                     </th>
//                                     <th scope="col" className="px-6 py-3">Full Name</th>
//                                     <th scope="col" className="px-6 py-3">Email</th>
//                                     <th scope="col" className="px-6 py-3">Phone Number</th>
//                                     <th scope="col" className="px-6 py-3">Company</th>
//                                     <th scope="col" className="px-6 py-3">Action</th>
//                                     </tr>
//                             </thead>
//                             <tbody>
//                                 {paginatedVisits.map((visitor) => (
//                                     <tr key={visitor.id} className="bg-white border-b">
//                                         <td className="p-4">
//                                             <div className="flex items-center"></div>
//                                         </td>
//                                         <td className="px-6 py-3">{visitor.full_name}</td>
//                                         <td className="px-6 py-3">{visitor.email}</td>
//                                         <td className="px-6 py-3">{visitor.phone_number}</td>
//                                         <td className="px-6 py-3">{visitor.company}</td>
//                                         <td className="px-6 py-3 flex space-x-2">
//                                             <button
//                                                 onClick={() => editModal(visitor)}
//                                                 className="font-medium text-blue-600 hover:underline"
//                                             >
//                                                 Edit
//                                             </button>
//                                             <button
//                                                 onClick={() => { setDeleteConfirmationMessage(`Are you sure you want to delete ${visitor.full_name}?`); setDeleteModal(true); getId(visitor); }}
//                                                 className="font-medium text-red-600 hover:underline"
//                                             >
//                                                 Delete
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                         <div className="flex justify-between p-4">
//                             <button
//                                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                                 disabled={currentPage === 1}
//                                 className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
//                             >
//                                 Previous
//                             </button>
//                             <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
//                             <button
//                                 onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//                                 disabled={currentPage === totalPages}
//                                 className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
//                             >
//                                 Next
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//       </div>
//         </AuthenticatedLayout>
   
           
//     );
// }
"use client";

import React, { useState, useEffect } from "react";


    const pharmacy = () =>  {
    const [tables, setTables] = useState<any[][]>([[]]); 
    const [formData, setFormData] = useState({
      Medication: "",
      Dose: "",
      Frequency: "",
      Time: "",
      }); 
       const [editIndex, setEditIndex] = useState<{ tableIndex: number; rowIndex: number } | null>(null);
       const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleAdd = () => {
        if (editIndex) {
          const updatedTables = [...tables];
          updatedTables[editIndex.tableIndex][editIndex.rowIndex] = formData;
          setTables(updatedTables);
          setEditIndex(null);
        } else {
          const updatedTables = [...tables];
          updatedTables[updatedTables.length - 1].push(formData);
          setTables(updatedTables);
        }
        setFormData({
            Medication: "",
            Dose: "",
            Frequency: "",
            Time: "",
        });
      };
        return (
        <div>

          <div style={{ marginTop: "10px", padding: "20px",fontStyle:"normal" }}>
           <h1 style={{ color: "#04A0D6",fontSize:"28px", fontWeight: "bold"  }}>Pharmacy Medical List</h1>

           <div style={{ marginTop:"25px",marginBottom: "2px", display: "flex", gap: "400px",fontSize:"20px" ,fontWeight: "semibold"}}>
            <label>
              Username:
              <input
              type="text"
              placeholder=" Enter username"
              style={{ borderColor: "#0FC6F9", borderWidth: "2px", borderStyle: "solid",borderRadius:"5px", }}
              />
            </label>
             <label>
             Doctor Name:
             <input
              type="text"
              placeholder=" Enter doctor name"
              style={{ borderColor: "#0FC6F9", borderWidth: "2px", borderStyle: "solid",borderRadius:"5px" }}
             />
            </label>
         </div>
       </div>
       <div>
       <div className="p-4">
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center space-x-3">
      
    </div>
    <div className="flex justify-end items-center space-x-4">
      
    </div>
  </div>

  {tables.map((table, tableIndex) => (
    <div key={tableIndex} className="mb-10">
      <table className="table-auto border-collapse w-full text-left bg-[#0A7594] rounded-md">
        <thead className="bg-[#00B6D7] text-black font-semibold fontsize-20">
          <tr>
            <th className="border-b px-4 py-2 w-1/3">Medication</th>
            <th className="border-b px-4 py-2 w-1/5">Dose</th>
            <th className="border-b px-4 py-2 w-1/5">Frequency</th>
            <th className="border-b px-4 py-2 w-1/5">Time</th>
          </tr>
        </thead>
        <tbody>
          {table.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => setEditIndex({ tableIndex, rowIndex })}
              className={
                editIndex &&
                editIndex.tableIndex === tableIndex &&
                editIndex.rowIndex === rowIndex
                  ? "bg-gray-300"
                  : ""
              }
            >
              <td className="border-b px-4 py-2 bg-[#00B6D7] font-semibold fontsize-20">
                {row.Medication}
              </td>
              <td className="border-b px-4 py-2 bg-[#00B6D7] font-semibold fontsize-20">
                {row.Dose}
              </td>
              <td className="border-b px-4 py-2 bg-[#00B6D7] font-semibold fontsize-20">
                {row.Frequency}
              </td>
              <td className="border-b px-4 py-2 bg-[#00B6D7] font-semibold fontsize-20">
                {row.Time}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ))}
</div>

           <div className="grid grid-cols-4 gap-8">
             <div className="col-span-4 flex justify-end">
             <button
             style={{}}
             className="bg-[#0A7594] text-white font-quicksand text-[18px] font-semibold w-[130px] h-[52px] rounded-md flex items-center justify-center space-x-2 transform hover:bg-[#A0BCC3] transition duration-200 ease-in-out mr-[13px]"
             onClick={handleAdd}
             >
             <span className="text-blue-500 text-lg"></span>
             <span>{editIndex ? "Update" : "Add"}</span>
             </button>
             </div>
           </div>

    
            
          </div>
        </div>
        
        )
    }
export default pharmacy
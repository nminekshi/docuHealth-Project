export default function Medications() {
    return (
      <div className="mb-4">
        <h2 className="text-teal-700 font-bold">CURRENT MEDICATIONS</h2>
        <div className="grid grid-cols-3 gap-2">
          <p><b>Brand Name</b></p>
          <p><b>Strength</b></p>
          <p><b>Form</b></p>
          
          <p>Amoxicillin</p>
          <p>250mg</p>
          <p>Tab</p>
  
          <p>Acetaminophen</p>
          <p>250mg</p>
          <p>Pill</p>
        </div>
      </div>
    );
  }
  
import Image from 'next/image';

export default function ProfileCard() {
  return (
    <div className="flex flex-col items-center text-center p-4 border-r">
      <Image
        src="/images/profile-placeholder.png"
        alt="Patient Profile"
        width={120}
        height={120}
        className="rounded-full border"
      />
      <button className="bg-teal-600 text-white px-4 py-2 rounded-lg mt-3">Edit</button>
      <h2 className="font-bold text-lg mt-2">Saveen Perera</h2>
      <p className="text-gray-600">Patient ID: MF105</p>
      
      <div className="text-left mt-4 text-sm">
        <p><b>Gender:</b> Male</p>
        <p><b>Age:</b> 23</p>
        <p><b>Height:</b> 5’6”</p>
        <p><b>Weight:</b> 160 lb</p>
        <p><b>Language:</b> Sinhala</p>
        <p><b>Blood Group:</b> B+</p>
      </div>
    </div>
  );
}

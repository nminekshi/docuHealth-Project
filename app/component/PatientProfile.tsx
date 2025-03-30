import ProfileCard from './ProfileCard';
import PersonalDetails from './PersonalDetails';
import Medications from './Medications';
import LabResults from './LabResults';
import Allergies from './Allergies';
import DownloadReport from './DownloadReport';

export default function PatientProfile() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      {/* Left Side - Profile Card */}
      <div className="w-full md:w-1/3">
        <ProfileCard />
      </div>

      {/* Right Side - Details */}
      <div className="w-full md:w-2/3 px-4">
        <PersonalDetails />
        <Medications />
        <LabResults />
        <Allergies />
      </div>
    </div>
  );
}

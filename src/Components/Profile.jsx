import icon from "../icon.png"

 function Profile() {
  return (
    <div className="profile mt-20 flex items-center justify-center">
      {/* Card */}
      <div className="profile-card w-[500px] h-[350px] bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
        
        {/* Top Avatar */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold">
            <img src={icon} alt="icon" />
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-6 space-y-3 text-lg">

            <div className="flex justify-between">
            <span className="font-semibold text-gray-600">USER ID</span>
            <span className="font-bold text-gray-800">1101011</span>
          </div>
          
          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">NAME</span>
            <span className="font-bold text-gray-800">ADITYA RAJ</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">MOBILE NO.</span>
            <span className="font-bold text-gray-800">8102656141</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold text-gray-600">E-MAIL</span>
            <span className="font-bold text-gray-800">adityaraj825103@gmail.com</span>
          </div>

          

        </div>

        {/* Bottom Decoration */}
        <div className="text-center text-sm text-gray-400 mt-4">
          
        </div>

      </div>
    </div>
  );
}
export default Profile;
import Paragraph from "./ui/Paragraph";

export const TimeSheet = () => {
  return (
    <div className="max-w-5xl mx-4 sm:mx-6 lg:mx-auto border border-slate-200 bg-white  rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-3">
      {/* Left Section: Time Sheet (Takes 2 columns on large screens) */}
      <div className="p-6 sm:p-10 lg:col-span-2 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-xl sm:text-2xl text-gray-800 mb-3">Appointment Time Sheet</h3>
          <Paragraph size="sm" variant="default">
            Please feel welcome to contact our friendly reception staff with any general or medical enquiry. Our doctors will receive or return any urgent calls.
          </Paragraph>
          <div className="mt-6 overflow-x-auto border border-gray-200/80 rounded-xl">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200/80">
                  <th className="p-4 font-semibold text-sm text-cyan-600">Doctor</th>
                  <th className="p-4 font-semibold text-sm text-cyan-600">Time</th>
                  <th className="p-4 font-semibold text-sm text-cyan-600">Break</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50/50 transition">
                  <td className="p-4 text-sm font-medium text-gray-800">Abdur Rahman</td>
                  <td className="p-4 text-sm text-gray-600">10:00AM - 10:00PM</td>
                  <td className="p-4 text-sm text-gray-600 whitespace-nowrap">03:00 PM - 05:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right Section: Quick Contacts (Takes 1 column, styled card) */}
      <div className="bg-cyan-600 text-white p-6 sm:p-10 flex flex-col justify-center">
        <h3 className="font-bold text-xl sm:text-2xl mb-4">Quick Contacts</h3>
        <Paragraph className="text-white mb-6 text-sm sm:text-base">Please feel free to contact our friendly staff with any medical enquiry.</Paragraph>

        <ul className="space-y-4 text-sm sm:text-base">
          <li className="flex flex-col sm:flex-row sm:justify-between border-b border-cyan-500/50 pb-2">
            <span className="font-medium text-cyan-200">Hospital Line:</span>
            <span className="font-semibold">+91 987654321</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between border-b border-cyan-500/50 pb-2">
            <span className="font-medium text-cyan-200">Emergency Line:</span>
            <span className="font-semibold">102</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between border-b border-cyan-500/50 pb-2">
            <span className="font-medium text-cyan-200">Location:</span>
            <span>New Delhi</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between pb-2">
            <span className="font-medium text-cyan-200">Mon - Fri:</span>
            <span>08:00 am - 10:00 pm</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

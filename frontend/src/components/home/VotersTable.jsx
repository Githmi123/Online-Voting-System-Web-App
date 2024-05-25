import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const VotersTable = ({voters}) => {
  return (
    <table className=" w-full border-seperate border-spacing-2" style={{position:"absolute",left:"0px",top:"120px",backgroundColor:"#CBCBE1", color:"black"}}>
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">Id</th>
              <th className="border border-slate-600 rounded-md">First Name</th>
              <th className="border border-slate-600 rounded-md">Last Name</th>
              <th className="border border-slate-600 rounded-md">
                DOB
              </th>
              <th className="border border-slate-600 rounded-md">
                NIC
              </th>
              <th className="border border-slate-600 rounded-md">Contact Number</th>
              <th className="border border-slate-600 rounded-md">
                Stakeholder Role
              </th>
            </tr>
          </thead>
          <tbody>
{/*           The voters.map function is used to iterate over each voter object in the voters array.
The arrow function (voter, index) => (...) is used to define the operation performed on each voter object. index represents the index of the current voter in the array. */}
            {voters.map((voter, index) => ( 
              <tr key={voter._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {voter.firstName}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {voter.lastName}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {voter.dOB}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {voter.nIC}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {voter.contactNumber}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {voter.stakeholderRole}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/voters/details2/${voter._id}`}>
                      <BsInfoCircle className="text-2x1 text-green-800" />
                    </Link>
                    <Link to={`/voters/edit2/${voter._id}`}>
                      <AiOutlineEdit className="text-2x1 text-yellow-600" />
                    </Link>
                    <Link to={`/voters/delete/${voter._id}`}>
                      <MdOutlineDelete className="text-2x1 text-red-600" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  )
}

export default VotersTable

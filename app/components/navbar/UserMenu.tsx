"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";

// interface Coworker {
//   first_name: string;
//   last_name: string;
//   inOffice: boolean;
// }

// const UserMenu: React.FC = () => {
//   const [coworkers, setCoworkers] = useState<Coworker[]>([
//     { first_name: 'Max', last_name: 'Mustermann', inOffice: false },
//     { first_name: 'Vladimir', last_name: 'Leles', inOffice: false },
//     { first_name: 'Tobias', last_name: 'Anhalt', inOffice: false },
//   ]);

//   const toggleInOfficeStatus = (index: number) => {
//     setCoworkers((prevCoworkers) => {
//       const updatedCoworkers = [...prevCoworkers];
//       updatedCoworkers[index].inOffice = !updatedCoworkers[index].inOffice;
//       return updatedCoworkers;
//     });
//   };

//   return (
//     <div>
//       {coworkers.map((coworker, index) => (
//         <div key={index}>
//           <p>Name: {coworker.first_name} {coworker.last_name}</p>
//           <button onClick={() => toggleInOfficeStatus(index)}>{coworker.inOffice ? 'In office' : 'Out of office'}</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CoworkerList;

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row gap-3 item-center">
        <div
          onClick={() => {}  }
          className="hidden px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-100"
        >
          AirBnb Your Homw
        </div>
        <div
          onClick={toggleOpen}
          className="
          p-4 
          md:py-1 
          md:px-2 
          border-[1px] 
          border-neutral-100 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
          <AiOutlineMenu />
          <div>
            <Avatar></Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;

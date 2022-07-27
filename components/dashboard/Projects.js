import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import a1 from "../../public/images/avatar1.png";
import a2 from "../../public/images/avatar2.png";
import a3 from "../../public/images/avatar3.png";
import a4 from "../../public/images/avatar4.png";
import a5 from "../../public/images/avatar5.png";
import a6 from "../../public/images/avatar6.png";
import a7 from "../../public/images/avatar7.png";
import a8 from "../../public/images/avatar8.png";
import a9 from "../../public/images/avatar9.png";

const Projects = () => {
  const [mobile, setMobile] = useState();
  const projects = [
    {
      pName: "Chakra Vision",
      pMembers: [
        {
          memberName: "mahmoud",
          memberImage: a1,
        },
        {
          memberName: "mahmoud",
          memberImage: a2,
        },
      ],
      pClient: "client name",
      pProgress: 25,
    },
    {
      pName: "Add Progress",
      pMembers: [
        {
          memberName: "mahmoud",
          memberImage: a5,
        },
        {
          memberName: "mahmoud",
          memberImage: a6,
        },
        {
          memberName: "mahmoud",
          memberImage: a7,
        },
      ],
      pClient: "client name",
      pProgress: 30,
    },
    {
      pName: "Fix Platform",
      pMembers: [
        {
          memberName: "mahmoud",
          memberImage: a1,
        },
        {
          memberName: "mahmoud",
          memberImage: a2,
        },
        {
          memberName: "mahmoud",
          memberImage: a3,
        },
        {
          memberName: "mahmoud",
          memberImage: a4,
        },
      ],
      pClient: "client name",
      pProgress: 87,
    },
    {
      pName: "Add the New",
      pMembers: [
        {
          memberName: "mahmoud",
          memberImage: a8,
        },
        {
          memberName: "mahmoud",
          memberImage: a9,
        },
      ],
      pClient: "client name",
      pProgress: 45,
    },
  ];
  useEffect(() => {
    if (window.innerWidth < 767) {
      setMobile(true)
    }
    window.addEventListener("resize", ()=>{
      if (window.innerWidth < 767) {
        setMobile(true)
      } else {
        setMobile(false)
      }
    })
  }, []);
  return (
    <div className="car">
      <h3>Projects</h3>
      <small>
        <span className="green">+12</span> Projects done this month
      </small>
      <table>
        <thead>
          <tr>
            <th>Project</th>
            <th>Members</th>
            <th>Client</th>
            <th>Completion</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((pro, index) => {
            return (
              <tr key={index}>
                <td>{pro.pName}</td>
                <td>
                  {pro.pMembers.map((member, index) => {
                    return (
                      <Link key={index} href="/profile">
                        <a className="members_img">
                          <Image
                            src={member.memberImage}
                            alt={member.memberName}
                            title={member.memberName}
                            width={30}
                            height={30}
                          />
                        </a>
                      </Link>
                    );
                  })}
                </td>
                <td>{pro.pClient}</td>
                <td>
                  {mobile ? 
                  (<small className="green">{pro.pProgress}%</small>)
                  :
                  (<div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-label="Example with label"
                    style={{ width: `${pro.pProgress}%` }}
                    aria-valuenow={pro.pProgress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {pro.pProgress}%
                  </div>
                </div>)
                  }
                </td>
              </tr>
            );
          })}
          {/* <tr>
            <td>552</td>
            <td>78745</td>
            <td>7\7</td>
            <td>7\7</td>
          </tr>
          <tr>
            <td>552</td>
            <td>78745</td>
            <td>7\7</td>
            <td>7\7</td>
          </tr>
          <tr>
            <td>552</td>
            <td>78745</td>
            <td>7\7</td>
            <td>7\7</td>
          </tr>
          <tr>
            <td>552</td>
            <td>78745</td>
            <td>7\7</td>
            <td>7\7</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;

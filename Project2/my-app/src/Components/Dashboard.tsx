import React, { useState ,ChangeEvent, useLayoutEffect} from 'react'
import { CgProfile } from "react-icons/cg";
import { LuLogOut } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { IoPersonAddSharp } from "react-icons/io5";
import { ImBin2 } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
interface User {
    id: number;
    username: string;
    jobRole: string;
    project: string;
  };

  interface UserCredentials {
    username: string;
    password: string;
  };
  

const Dashboard = () => {
  const navigate=useNavigate();

  const navHome=()=>
  {
         navigate('/');
  }
    const [userCredentials, setUserCredentials] = useState<UserCredentials>({ username: '', password: '' });
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [admin,setAdmin]=useState(false);
  const [adminCard,setAdminCard]=useState(false);

  const handleLogin = (): void => {
    if (userCredentials.username === 'SHAIKH' && userCredentials.password === '2647') {
      setLoggedIn(true);
      setAdmin(true);
      setAdminCard(false);
    
    } else {
      alert('Invalid username or password. Please try again.');
      
    }
}
    const [formuser,setFormuser]=useState(false);
    const toggleFormUser=()=>
    {
        setFormuser(!formuser)
    }
    const [users, setUsers] = useState<User[]>([]);
    const [formData, setFormData] = useState<User>({
      id: 0,
      username: '',
      jobRole: '',
      project: '',
    });
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });

      
    };
  
    const addUser = () => {
      if (formData.username && formData.jobRole && formData.project) {
        setUsers([...users, { ...formData, id: Date.now() }]);
        setFormData({
          id: 0,
          username: '',
          jobRole: '',
          project: '',
        });
        toggleFormUser();
      } else {
        alert('Please fill in all fields.');
      }
    };
  
    const deleteUser = (id: number) => {
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    };


    const[adduser,setAddUser]=useState(false);

    const toggleAddUser=()=>
    {
        setAddUser(true);
    }

    
  return (
    <>
         <div className="container-fluid">
            <div className="row ">
                <div className="col-1 ">
                    <div className="m-auto row sidemenu d-flex justify-content-center align-items-center w-90 "></div>
                    <div className="m-auto row sidemenu d-flex justify-content-center align-items-center w-90  mt-3"><MdDashboard size={25}/>Dashboard</div>
                    <div className="m-auto row sidemenu d-flex justify-content-center align-items-center w-90 mt-3"><CgProfile size={25}/>Profile</div>
                    {isLoggedIn?(<div className="m-auto row sidemenu d-flex justify-content-center align-items-center w-90 mt-3"><IoPersonAddSharp size={25} onClick={toggleFormUser}/>AddUser</div>):(<></>)}
                    <div className="m-auto row sidemenu d-flex justify-content-center align-items-center w-90 mt-3"><FaInfoCircle size={25}/>About</div>
                    <div className="m-auto row sidemenu d-flex justify-content-center align-items-center w-90 mt-3"><IoMdSettings size={25}/>Settings</div>
                    <div className="m-auto row sidemenu d-flex justify-content-center align-items-center w-90 mt-3"><FaStar size={25}/>Reviews</div>
                    <div className="m-auto row sidemenu d-flex justify-content-center align-items-center w-90"></div>
                   
                    {isLoggedIn?(<></>):(<div className="m-auto row sidemenu d-flex justify-content-center align-items-center w-90 "></div>)}
                    {isLoggedIn?(<div className="m-auto row sidemenu d-flex justify-content-center align-items-center w-90" onClick={()=>{toggleAddUser();navHome()}}><LuLogOut size={25}/>Back</div>):(<div className="m-auto row sidemenu d-flex justify-content-center align-items-center w-90  mt-3" onClick={()=>{toggleAddUser();navHome()}}><LuLogOut size={25}/>Back</div>)}
                    
                </div>
                <div className=" col-11 Navbar">
                    <div className="d-flex justify-content-between flex-row ">
                        <div className=' '><h1 className='position-absolute start-0 ms-3'>Dashboard</h1></div>
                         {admin || isLoggedIn ?(<div className=''><button className='bg-black text-white rounded-3 px-2 py-2' onClick={()=>{setAdmin(false); setLoggedIn(false); setAdminCard(false)}}>User<FaUserAlt size={23} className="text-white"/></button></div>):(
                         <div className=''><button className='bg-black text-white rounded-5 px-2 py-2' onClick={()=>{setAdmin(true);setAdminCard(true)}}>Admin<RiAdminFill size={25} className="text-white"/></button></div>)}
                    </div>
    
     
       {adminCard ?(<div className="admin d-flex justify-content-center align-items-center">
          <div className="card shadow p-5">
            <div className="row">
              <h2>Admin Login</h2>
            </div>
            <div className="row d-flex justify-content-center">
              <MdAdminPanelSettings size={40} />
            </div>
            <div className="row d-flex justify-content-center mt-4">
              <input
                type="text"
                className="form-control bg-light input-group"
                placeholder="Admin Name"
                style={{ width: '95%' }}
                value={userCredentials.username}
                onChange={(e) => setUserCredentials({ ...userCredentials, username: e.target.value })}
                required
              />
            </div>
            <div className="row d-flex justify-content-center mt-3">
              <input
                type="password"
                className="form-control bg-light input-group"
                placeholder="Password"
                style={{ width: '95%' }}
                value={userCredentials.password}
                onChange={(e) => setUserCredentials({ ...userCredentials, password: e.target.value })}
                required
              />
            </div>
            <div className="row d-flex justify-content-center mt-3">
              <input
                type="submit"
                className="btn btn-lg bg-black text-white fs-6"
                value="Login"
                style={{ width: '95%' }}
                onClick={handleLogin}
              />
            </div>
          </div>
        
    </div>):(<></>)}
    
    {(admin && isLoggedIn) && users.length>=1?(<div className="row">
        <div className="col"><ul className="list-group mt-3"><li className="list-group-item d-flex justify-content-between align-items-center">
    <div className='d-flex justify-content-between w-100 text-center'>
              <div className='text-center'>Name</div><div className='ms-5 text-center'>JobRole</div><div className='ms-2'>Project</div>
            
            <div className='ms-1'>Edit</div>
            <div>Delete</div>
            </div>
        </li></ul>
        </div>
        </div>):(<></>)}
                    
                 {admin && isLoggedIn?( <div className="row">
                    <div className="col">
                    <ul className="list-group mt-1">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div className='d-flex justify-content-between w-100'>
              <div><strong>{user.username}</strong></div><div>{user.jobRole}</div><div>{user.project}</div>
            
            <div><MdModeEditOutline size={25}  className="me-4"/></div>
            <div><ImBin2  size={25} onClick={() => deleteUser(user.id)} className='del-icon ' /></div>
            </div>

          </li>
        ))}
      </ul>
                    </div>
                 </div>
                 ):(<></>)}
                  {formuser?(<div className="row mt-3">
                        <div className="col d-flex justify-content-center">
                        <div className="card adduser">
          <div className="card-body">
            <h5 className="card-title text-center">Add User</h5>
            <form>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="jobRole">Job Role:</label>
                <input
                  type="text"
                  className="form-control"
                  id="jobRole"
                  name="jobRole"
                  value={formData.jobRole}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="project">Project:</label>
                <input
                  type="text"
                  className="form-control"
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                />
              </div>
                    <div className='d-flex justify-content-center mt-2'>
                   
              <button type="button" className="btn bg-black text-white rounded-2" onClick={addUser}>
                Add User
              </button>
              </div>
            </form>
          </div>
        </div>
                        </div>
                    </div>):(<></>)}
                 

                </div>
            </div>
         </div>
    </>
  )
}

export default Dashboard;
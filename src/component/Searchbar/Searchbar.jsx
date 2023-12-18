import React, { useEffect, useState } from 'react';
import user_data from '../../userdata';
import './Searchbar.css';

export default function Searchbar() {

    const [search,setSearch]=useState(user_data);
    const [searchName,setSearchName]=useState("");

    const [selectedUser,setSelectedUser]=useState(user_data[0]);

    const handleChange=(e)=>{
        setSearchName(e.target.value);
    }

    useEffect(()=>{
        console.log(search)
    },[search])
  return (
    <div className='searchbar'>
        <div className="search-cont">
            <input className='search' onChange={handleChange}/>
            <div className='search-result'>
                <div className="recent">
                    {/* {search.filter((item)=>item.name.includes(searchName)).map((item)=>)} */}
                    {search.filter((user)=>{
                        if(searchName=="")return user;
                        else if(user.name.toLowerCase().includes(searchName.toLowerCase())){
                            return user;
                        }
                    }).map((user)=>{
                        return <div key={user.id} onClick={e=>setSelectedUser(user)} className="recent-items"><img src={user.profile_img} className='small-img'/>{user.name}</div>
                    })}
                </div>
                <div className="profile">
                    <div className="profile-img-cont">
                        <img src={'https://source.unsplash.com/random'} alt="" className="profile-img" />
                        <div style={{fontSize:'16px',fontWeight:'400'}}>{selectedUser.name}</div>
                        <div style={{fontSize:'14px'}}>{selectedUser.position}</div>
                    </div>
                    <div className="profile-detail-cont">
                        <div style={{display:'flex',width:'100%',padding:'0.5rem 0rem'}}>
                            <div className="profile-detail-title">Phone</div>
                            <div className="profile-detail-info">{selectedUser?.phone}</div>
                        </div>
                        <div style={{display:'flex',width:'100%',padding:'0.5rem 0rem'}}>
                            <div className="profile-detail-title">Email</div>
                            <div className="profile-detail-info">{selectedUser?.email}</div>
                        </div>
                        <div style={{display:'flex',width:'100%',padding:'0.5rem 0rem'}}>
                            <div className="profile-detail-title">URL</div>
                            <div className="profile-detail-info">https://www.apple.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import './ProfileCard.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cover from '../../Img/back1.jpg';
import profile1 from '../../Img/akbar.jpeg';

const ProfileCard = ({ location }) => {

    const { user } = useSelector((state) => state.authReducer.authData);
    const posts = useSelector((state) => state.postReducer.posts)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;



    return (
        <div className='ProfileCard'>

            <div className="ProfileImages">
                {/* <img src={user.coverPicture ? serverPublic + user.coverPicture : serverPublic + "defaultCover.jpg"} alt="" />
                <img src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png"} alt="" /> */}
                <img src={cover}  style={{borderRadius:"10px"}}/>
                <img src={profile1} width={200} height={100}/>

            </div>

            <div className="ProfileName">
                <span>{user.firstname} {user.lastname}</span>
                <span>{user.worksAt ? user.worksAt : "write about yourself..."}</span>
            </div>

            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>{user.followers.length}</span>
                        <span>Followers</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>{user.following.length}</span>
                        <span>Following</span>
                    </div>

                    {location === "profilePage" && (
                        <>
                            <div className="vl"></div>
                            <div className="follow">
                                <span>{posts.filter((post) => post.userId === user._id).length}</span>
                                <span>Posts</span>
                            </div>
                        </>
                    )}

                </div>
                <hr />
            </div>

            {location === "profilePage" ? '' :
                <span>
                    <Link style={{ textDecoration: "none", color: "inherit" }} to={`/profile/${user._id}`}>My Profile</Link>
                </span>
            }

        </div>
    )
}

export default ProfileCard

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../../redux/actions/authActions';

export const StickyRight = () => {

    const {role:userRole, img:userImage, userName} = useSelector(state => state.auth)

    const [toggleProfile, settoggleProfile] = useState(false)

    const dispatch = useDispatch();

    const handleDropdown =(e)=>{
        e.preventDefault();
        
        settoggleProfile(!toggleProfile)
    }

    const handleLogout= ()=>{
        dispatch(startLogout())
    }

    return (
        <div className="header-right">


            <div className="profile_details">
				<ul>
					<li 
                        className={ !toggleProfile ? "dropdown profile_details_drop" : "dropdown profile_details_drop open"}    
                    >
						<a
                            href="#!" 
                            className="dropdown-toggle" 
                            data-toggle="dropdown" 
                            aria-expanded={toggleProfile}
                            onClick ={ handleDropdown }
                        >
							<div className="profile_img">
								<span 
                                    className="prfil-img">
                                    <img
                                        style={{maxWidth:45}} 
                                        src={userImage} 
                                        alt="user"
                                    /> 
                                </span>
								<div className="user-name">
									<p>{userName}</p>
									{
                                        userRole==='ADMIN_ROLE'
                                            ? <span>Administrador</span>
                                            : <span>Invitado</span>
                                    }
								</div>
								<i className="fa fa-angle-down lnr"></i>
								<i className="fa fa-angle-up lnr"></i>
								<div className="clearfix"></div>
							</div>
						</a>
							<ul className="dropdown-menu drp-mnu">
								{/* <li> <a href="#!"><i className="fa fa-cog"></i> Settings</a> </li>
								<li> <a href="#!"><i className="fa fa-user"></i> My Account</a> </li>
								<li> <a href="#!"><i className="fa fa-suitcase"></i> Profile</a> </li> */}
								<li
                                    onClick={ handleLogout }
                                > 
                                    <a href="#!"><i className="fa fa-sign-out"></i> Logout</a> 
                                </li>
							</ul>
					</li>
				</ul>
			</div>
            <div className="clearfix"> </div>
        </div>
    )
}

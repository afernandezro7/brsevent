import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../../redux/actions/authActions';
import { chUnSetActiveAction } from '../../../redux/actions/chActions';
import { pgSetActiveAction } from '../../../redux/actions/pageActions';

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
        dispatch(pgSetActiveAction('info'))
        dispatch(chUnSetActiveAction())
    }

    return (
        <div className="header-right">


            <div className="profile_details">
				<ul>
					<li 
                        className={ !toggleProfile ? "dropdown profile_details_drop" : "dropdown profile_details_drop open"}    
                    >
						<div
                            
                            className="dropdown-toggle anchor-div" 
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
						</div>
							<ul className="dropdown-menu drp-mnu">
								{/* <li> <div className="anchor-div"><i className="fa fa-cog"></i> Settings</div> </li>
								<li> <div className="anchor-div"><i className="fa fa-user"></i> My Account</div> </li>
								<li> <div className="anchor-div"><i className="fa fa-suitcase"></i> Profile</div> </li> */}
								<li
                                    onClick={ handleLogout }
                                > 
                                    <div className="anchor-div">
                                        <i className="fa fa-sign-out"></i> Logout
                                    </div> 
                                </li>
							</ul>
					</li>
				</ul>
			</div>
            <div className="clearfix"> </div>
        </div>
    )
}

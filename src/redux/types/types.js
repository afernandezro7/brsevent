

export const types = {
    
    //AUTH
    authCheckingFinish: '[Auth] Finish checking login state',
    authStartTokenRenew: '[Auth] Start Token Renew',
    
    authStartLogin: '[Auth] Start login',
    authLogin: '[AUTH] Login',
    authLogout: '[AUTH] Logout',


    //USER
    userSetActive: '[USER] Set Active User',
    userUnSetActive: '[USER] UnSet Active User',

    userStartRegister: '[USER] Start User Register',
    userRegister: '[USER] User Register',

    userStartListChecking: '[USER] Start Check User List',
    userListCheckingFinish: '[USER] Check User List',
    
    userStartDelete: '[USER] Start User Delete',
    userDelete: '[USER] User Delete',

    
    //SPEAKER
    spSetActive: '[SPEAKER] Set Active Speaker',
    
    spStartRegister: '[SPEAKER] Start Speaker Register',
    spRegister: '[SPEAKER] Speaker Register',

    spStartListChecking: '[SPEAKER] Start Check Speaker List',
    spListCheckingFinish: '[SPEAKER] Speakers List Checked ',

    spStartDelete: '[SPEAKER] Start Speaker Delete',
    spDelete: '[SPEAKER] Speaker Delete',


    //CHANNEL
    chSetActive: '[CHANNEL] Set Active Channel',
    chUnSetActive: '[CHANNEL] UnSet Active Channel',

    chStartListChecking: '[CHANNEL] Start Check Channels List',
    chListCheckingFinish: '[CHANNEL] Channels List Checked ',

    chAddNew: '[CHANNEL] Add New Channel',
    chRemove: '[CHANNEL] Remove Channel',


    //PAGE
    pgSetActivePage: '[Page] Set Active Page',


    //POSTER
    posterSetActive: '[POSTER] Set Active Poster',
    posterUnSetActive: '[POSTER] UnSet Active Poster',

    posterStartListChecking: '[POSTER] Start Check Poster List',
    posterListCheckingFinish: '[POSTER] Posters List Checked ',

    posterAddNew: '[POSTER] Add New Poster',
    posterRemove: '[POSTER] Remove Poster'


}
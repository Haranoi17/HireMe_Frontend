export default function LoggedInLoggedOutRenderBrancher({renderIfLoggedIn, renderIfNotLoggedIn, isLoggedIn}){
    return( isLoggedIn ? renderIfLoggedIn : renderIfNotLoggedIn ) 
}
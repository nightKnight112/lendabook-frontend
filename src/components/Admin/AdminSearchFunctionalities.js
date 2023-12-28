import { GetBookFunctionalitiesAdmin } from "../Book/BookList";
import { GetUserByAdmins } from "../User/UserList";
import { GetAuthorFuncAdmin } from "../Author/AuthorList";
import { GetCommunityFuncAdmin } from "../Community/CommunityList";

export const AdminSearchFunctionalities = () => {
    return(
        <>
            <GetUserByAdmins />
            <GetCommunityFuncAdmin />
            <GetAuthorFuncAdmin />
            <GetBookFunctionalitiesAdmin />
        </>
    )
}
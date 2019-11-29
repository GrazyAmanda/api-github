import React from "react";
import RepoItem from "./RepoItem";
import UserInfo from "../UserInfo";

const RepoLista = ({users, repos }) => (
<div className="repoListContainer">
<UserInfo
  user={users}/>
{repos.map(repo => (
     <RepoItem 
     repo={repo}/> 
     
    ))}
</div>
);


export default RepoLista;
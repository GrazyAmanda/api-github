import React from "react";
//faz a requi e me traz a lista de repositórios do usuário
const RepoItem = ({repos, repo}) => (
<div className="row">
        
  <a
    href={repo.html_url}
    key={repo.id}
    className="repoItemContainer"
    target="_blank"
  >
   <h4>{repo.owner.login}</h4>
   <span>{repo.name}</span>
    <span>Stars: {repo.stargazers_count}</span>
    <span>Forks: {repo.forks}</span>
    <span>Issues: {repo.open_issues}</span>
  </a>

  
  </div>
);

export default RepoItem;
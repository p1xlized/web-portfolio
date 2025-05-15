import React from "react";

type GitHubStatsProps = {
  username: string;
  className?: string;
};

const GitHubStats: React.FC<GitHubStatsProps> = ({ username, className }) => {
  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&theme=nightowl&show_icons=true&hide_border=true&count_private=true`;

  return (
    <img
      src={statsUrl}
      alt={`GitHub Stats for ${username}`}
      className={className}
      style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "1rem", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
    />
  );
};

export default GitHubStats;

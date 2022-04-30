export const envConfig = {
  isAuthMode: process.env.REACT_APP_USE_AUTH || false,
  localApiUrl: process.env.REACT_APP_LOCAL_API || "http://localhost:8080/",
  remoteApiUrl: process.env.REACT_APP_REMOTE_API || "https://randomuser.me/"
} as const;



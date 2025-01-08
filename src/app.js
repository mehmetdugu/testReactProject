import { getUsers, getPost } from "./lib/services.js";

Promise.all([getUsers(1), getPost(1)])
    .then(console.log)
    .catch(console.log);

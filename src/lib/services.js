import axios from "axios";

const getUsers = (user_id) => {
    return new Promise(async (resolve, reject) => {
            const { data } = await axios('https://jsonplaceholder.typicode.com/users/' + user_id);
            resolve(data);
            reject('Kullanıcı Bilgileri Alınamadı!');
    });
};

const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {
            const { data } = await axios('https://jsonplaceholder.typicode.com/posts/' + post_id);
            resolve(data);
            reject('Post Bilgileri Alınamadı!');
    });
};

export { getUsers, getPost };
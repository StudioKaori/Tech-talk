import Api from "./Api";
const baseUrl = '/articles'

class PostsApi {
    getAllPosts() {
        return Api.get(baseUrl);
    }

    getPostById(id) {
        return Api.get(baseUrl + '/'+id);
    }

    createPost(post) {
        return Api.post(baseUrl, post);
    }

    updatePost(post) {
        return Api.put(baseUrl, post);
    }

    deletePost(id) {
        return Api.delete(baseUrl + '/'+id);
    } 
}

export default new PostsApi();
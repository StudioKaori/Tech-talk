import Api from "./Api";
const baseUrl = '/comments'

class CommentsApi {
    getAllComments() {
        return Api.get(baseUrl);
    }

    getCommentById(id) {
        return Api.get(baseUrl + '/'+id);
    }

    createComment(comment) {
        return Api.post(baseUrl, comment);
    }

    updateComment(comment) {
        return Api.put(baseUrl, comment);
    }

    deleteComment(id) {
        return Api.delete(baseUrl + '/'+id);
    } 
}

export default new CommentsApi();
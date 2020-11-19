package se.kth.sda.tech.comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import se.kth.sda.tech.model.ModelSort;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {
    @Autowired
    private CommentRepo commentRepo;


    public List<Comment> getAll() {
        return commentRepo.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }

    public List<Comment> getAllSorted(String sort, String sortmode) throws IllegalArgumentException {
        return commentRepo.findAll(ModelSort.getSortByReaction(sort, sortmode));
    }

    public Optional<Comment> getById(long id) {
        return commentRepo.findById(id);
    }

    public Comment create(Comment newComment) {
        return commentRepo.save(newComment);
    }

    public Comment update(Comment updatedComment) {
        return commentRepo.save(updatedComment);
    }

    public void delete(Long id) {
        commentRepo.deleteById(id);
    }

    public List<Comment> findAllByArticleId(Long articleId) {
        return commentRepo.findAllByArticleId(articleId, Sort.by(Sort.Direction.DESC, "id"));
    }

}

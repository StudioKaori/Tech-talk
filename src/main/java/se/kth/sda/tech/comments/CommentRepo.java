package se.kth.sda.tech.comments;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepo extends JpaRepository<Comment, Long> {
    List<Comment> findAllByArticleId(Long articleId, Sort sort);

    List<Comment> findAll(Sort sort);
}

package se.kth.sda.tech.articles;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import se.kth.sda.tech.model.ModelSort;

import java.util.List;
import java.util.Optional;

@Service
public class ArticleService {

    @Autowired
    private ArticleRepo articleRepo;


    public List<Article> getAll() {
        return articleRepo.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }

    public List<Article> getAllSorted(String sort, String sortmode) throws IllegalArgumentException {
        return articleRepo.findAll(ModelSort.getSortByReaction(sort, sortmode));
    }

    public Optional<Article> getById(long id) {
        return articleRepo.findById(id);
    }

    public Article create(Article newArticle) {
        return articleRepo.save(newArticle);
    }

    public Article update(Article updatedArticle) {
        return articleRepo.save(updatedArticle);
    }

    public void delete(Long id) {
        articleRepo.deleteById(id);
    }

    public List<Article> findAllByTopicId(Long topicId) {
        return articleRepo.findAllByTopics_id(topicId);
    }


}

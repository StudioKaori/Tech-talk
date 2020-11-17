package se.kth.sda.tech.articles;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@CrossOrigin
// @CrossOrigin for react experiment
@RestController
@RequestMapping("/articles")
public class ArticleController {

    @Autowired
    ArticleService articleService;

    @GetMapping("")
    public List<Article> getAll(@RequestParam(required = false) Long topicId, @RequestParam(required = false) String sort, @RequestParam(required = false) String sortmode) {
        try {
            if (topicId != null) {
                return articleService.findAllByTopicId(topicId);
            }

            if (sort != null) {
                return articleService.getAllSorted(sort, sortmode);
            }
            return articleService.getAll();

        } catch (NullPointerException | IllegalArgumentException e) {
            // If request param is invalid, throw exception
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid topic id, sort mode. Please try again.");
        }
    }


    @GetMapping("/{id}")
    public Article getById(@PathVariable long id) {
        return articleService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("")
    public Article create(@RequestBody Article newArticle) {
        return articleService.create(newArticle);
    }

    @PutMapping("")
    public Article update(@RequestBody Article updatedArticle) {
        return articleService.update(updatedArticle);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        articleService.delete(id);
    }
}

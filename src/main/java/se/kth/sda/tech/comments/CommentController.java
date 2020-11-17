package se.kth.sda.tech.comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@CrossOrigin
// @CrossOrigin for react experiment
@RestController
@RequestMapping("/comments")
public class CommentController {
    @Autowired
    CommentService commentService;

    @GetMapping("")
    public List<Comment> getAll(@RequestParam(required = false) Long articleId, @RequestParam(required = false) String sort, @RequestParam(required = false) String sortmode) {

        try {
            if (articleId != null) {
                return commentService.findAllByArticleId(articleId);
            }

            if (sort != null) {
                return commentService.getAllSorted(sort, sortmode);
            }

            return commentService.getAll();
        } catch (NullPointerException | IllegalArgumentException e) {
            // If request param is invalid, throw exception
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid topic id, sort mode. Please try again.");
        }

    }

    @GetMapping("/{id}")
    public Comment getById(@PathVariable long id) {
        return commentService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("")
    public Comment create(@RequestBody Comment newComment) {
        return commentService.create(newComment);
    }

    @PutMapping("")
    public Comment update(@RequestBody Comment updatedComment) {
        return commentService.update(updatedComment);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        commentService.delete(id);
    }
}

package se.kth.sda.tech.reactions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@CrossOrigin
// @CrossOrigin for react experiment
@RestController
@RequestMapping("/reactions")
public class ReactionController {

    @Autowired
    ReactionService reactionService;

    @GetMapping("")
    public List<Reaction> getAll() {
        return reactionService.getAll();
    }

    @GetMapping("/{id}")
    public Reaction getById(@PathVariable long id) {
        return reactionService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("")
    public Reaction create(@RequestBody Reaction newReaction) {
        return reactionService.create(newReaction);
    }

    @PutMapping("")
    public Reaction update(@RequestBody Reaction updatedReaction) {
        return reactionService.update(updatedReaction);
    }

    @PutMapping("/{id}")
    public Reaction update(@PathVariable long id, @RequestParam(required = false) String incrementTarget) {
        Reaction reactionById = reactionService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        if (incrementTarget.equals("like")) {
            reactionById.setNumLike(reactionById.getNumLike() + 1);
        } else if (incrementTarget.equals("dislike")) {
            reactionById.setNumDislike(reactionById.getNumDislike() + 1);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

        return reactionService.create(reactionById);
    }


    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        reactionService.delete(id);
    }
}

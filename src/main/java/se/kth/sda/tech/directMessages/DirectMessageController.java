package se.kth.sda.tech.directMessages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@CrossOrigin
// @CrossOrigin for react experiment
@RestController
@RequestMapping("/directMessages")
public class DirectMessageController {

    @Autowired
    DirectMessageService directMessageService;

//    @GetMapping("")
//    public List<DirectMessage> getAll() {
//        return directMessageService.getAll();
//    }

    @GetMapping("/{senderId}")
    public List<DirectMessage> findAllBySenderId(@PathVariable long senderId) {
        return directMessageService.findAllBySenderId(senderId);
    }

    @PostMapping("")
    public DirectMessage create(@RequestBody DirectMessage newDirectMessage) {
        return directMessageService.create(newDirectMessage);
    }

//    @PutMapping("")
//    public DirectMessage update(@RequestBody DirectMessage updatedDirectMessage) {
//        return directMessageService.update(updatedDirectMessage);
//    }
//
//    @PutMapping("/{id}")
//    public DirectMessage update(@PathVariable long id, @RequestParam(required = false) String incrementTarget) {
//        DirectMessage directMessageById = directMessageService.getById(id)
//                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
//
//        if (incrementTarget.equals("like")) {
//            directMessageById.setNumLike(directMessageById.getNumLike() + 1);
//        } else if (incrementTarget.equals("dislike")) {
//            directMessageById.setNumDislike(directMessageById.getNumDislike() + 1);
//        } else {
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
//        }
//
//        return directMessageService.create(directMessageById);
//    }
//
//
//    @DeleteMapping("{id}")
//    public void delete(@PathVariable Long id) {
//        directMessageService.delete(id);
//    }
}

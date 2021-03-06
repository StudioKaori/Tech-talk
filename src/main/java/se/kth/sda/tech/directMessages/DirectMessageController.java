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

    @GetMapping("/one")
    //  directMessages/one?senderId=&receiverId=
    public List<DirectMessage> findAllBySenderIdAndReceiverId(@RequestParam long senderId, @RequestParam long receiverId) {
        return directMessageService.findAllBySenderIdAndReceiverId(senderId,receiverId);
    }

    @GetMapping("/findNewDm")
    //  directMessages/findNewDm?userId=&dmReceiverId=
    public List<DirectMessage> findNewDm(@RequestParam long userId, @RequestParam long dmReceiverId) {
        return directMessageService.findUnreadDm(userId,dmReceiverId);
    }

    @GetMapping("/findAllNewDm")
    //  directMessages/findAllNewDm?userId=
    public List<DirectMessage> findAllNewDm(@RequestParam long userId) {
        return directMessageService.findAllUnreadDm(userId);
    }

    @GetMapping("/findAllUnfetchedDm")
    //  directMessages/findAllUnfetchedDm?userId=
    public List<DirectMessage> findAllUnfetchedDm(@RequestParam long userId) {
        return directMessageService.findAllUnfetchedDm(userId);
    }

    @PostMapping("")
    public DirectMessage create(@RequestBody DirectMessage newDirectMessage) {
        return directMessageService.create(newDirectMessage);
    }

    @PutMapping("/markRead")
    //  directMessages/markRead?senderId=&receiverId=
    public List<DirectMessage> create(@RequestParam long senderId, @RequestParam long receiverId) {
        return directMessageService.markUnreadDMAdRead(senderId,receiverId);
    }

    @PutMapping("/markAllDMFetched")
    //  directMessages/markAllDMFetched?senderId=
    public List<DirectMessage> markAllDMFetched(@RequestParam long senderId) {
        return directMessageService.markAllDMFetched(senderId);
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

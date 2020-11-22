package se.kth.sda.tech.directMessages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DirectMessageService {

    @Autowired
    private DirectMessageRepo directMessageRepo;


    public List<DirectMessage> findAllBySenderId(long senderId) {
        return directMessageRepo.findAllBySenderId(senderId);
    }

    public List<DirectMessage> findAllBySenderIdAndReceiverId(long senderId, long receiverId) {
        List<DirectMessage> directMessages = directMessageRepo.findAllByReceiverIdAndSenderIdOrderByDateDesc(senderId,receiverId);
        directMessages.addAll(directMessageRepo.findAllBySenderIdAndReceiverIdOrderByDateDesc(senderId,receiverId));
        return directMessages.stream().sorted(Comparator.comparing(DirectMessage::getDate)).collect(Collectors.toList());

    }

    // for isRead
    public List<DirectMessage> markUnreadDMAdRead(long senderId, long receiverId) {
        return directMessageRepo.markUnreadDMAdRead(senderId,receiverId);
    }

    //    public List<DirectMessage> getAll() {
//        return directMessageRepo.findAll();
//    }
//
//    public Optional<DirectMessage> getById(long id) {
//        return directMessageRepo.findById(id);
//    }
//
    public DirectMessage create(DirectMessage newDirectMessage) {
        return directMessageRepo.save(newDirectMessage);
    }

    public List<DirectMessage> findUnreadDm(long userId, long dmReceiverId) {
        return directMessageRepo.findUnreadDm(userId,dmReceiverId);
    }
//
//    public DirectMessage update(DirectMessage updatedDirectMessage) {
//        return directMessageRepo.save(updatedDirectMessage);
//    }
//
//    public void delete(Long id) {
//        directMessageRepo.deleteById(id);
//    }

}

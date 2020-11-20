package se.kth.sda.tech.directMessages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DirectMessageService {

    @Autowired
    private DirectMessageRepo directMessageRepo;


    public List<DirectMessage> findAllBySenderId(long senderId) {
        return directMessageRepo.findAllBySenderId(senderId);
    }

//    public List<DirectMessage> getAll() {
//        return directMessageRepo.findAll();
//    }
//
//    public Optional<DirectMessage> getById(long id) {
//        return directMessageRepo.findById(id);
//    }
//
//    public DirectMessage create(DirectMessage newDirectMessage) {
//        return directMessageRepo.save(newDirectMessage);
//    }
//
//    public DirectMessage update(DirectMessage updatedDirectMessage) {
//        return directMessageRepo.save(updatedDirectMessage);
//    }
//
//    public void delete(Long id) {
//        directMessageRepo.deleteById(id);
//    }

}

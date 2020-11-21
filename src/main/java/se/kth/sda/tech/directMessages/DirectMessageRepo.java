package se.kth.sda.tech.directMessages;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DirectMessageRepo extends JpaRepository<DirectMessage, Long> {
    List<DirectMessage> findAllBySenderId(long senderId);
    List<DirectMessage> findAllBySenderIdAndReceiverId(long senderId,long receiverId);

}
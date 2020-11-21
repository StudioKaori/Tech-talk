package se.kth.sda.tech.directMessages;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DirectMessageRepo extends JpaRepository<DirectMessage, Long> {
    List<DirectMessage> findAllBySenderId(long senderId);
    List<DirectMessage> findAllBySenderIdAndReceiverIdOrderByDateDesc(long senderId,long receiverId);
    List<DirectMessage> findAllByReceiverIdAndSenderIdOrderByDateDesc(long senderId,long receiverId);

    @Query("UPDATE direct_message SET is_read = true WHERE sender_id=%:senderId% AND receiver_id=%:receiverId%")
    List<DirectMessage> hello();

}

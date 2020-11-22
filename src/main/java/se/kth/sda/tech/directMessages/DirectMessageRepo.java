package se.kth.sda.tech.directMessages;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DirectMessageRepo extends JpaRepository<DirectMessage, Long> {
    List<DirectMessage> findAllBySenderId(long senderId);
    List<DirectMessage> findAllBySenderIdAndReceiverIdOrderByDateDesc(long senderId,long receiverId);
    List<DirectMessage> findAllByReceiverIdAndSenderIdOrderByDateDesc(long senderId,long receiverId);

    @Query(value = "UPDATE direct_message SET is_read = true WHERE sender_id=:senderId AND receiver_id=:receiverId RETURNING *", nativeQuery = true)
    List<DirectMessage> markUnreadDMAdRead(@Param("senderId") long senderId, @Param("receiverId") long receiverId);

    @Query(value = "SELECT * FROM direct_message WHERE receiver_id=:userId AND is_fetched = false", nativeQuery = true)
    List<DirectMessage> findAllUnfetchedDm(@Param("userId") long userId);

    @Query(value = "UPDATE direct_message SET is_fetched = true WHERE receiver_id=:userId RETURNING *", nativeQuery = true)
    List<DirectMessage> markAllDMFetched(@Param("userId") long userId);

    @Query(value = "SELECT * FROM direct_message WHERE receiver_id=:userId AND sender_id=:dmReceiverId AND is_read = false", nativeQuery = true)
    List<DirectMessage> findUnreadDm(@Param("userId") long userId, @Param("dmReceiverId") long dmReceiverId);

    @Query(value = "SELECT * FROM direct_message WHERE receiver_id=:userId AND is_read = false", nativeQuery = true)
    List<DirectMessage> findAllUnreadDm(@Param("userId") long userId);

}

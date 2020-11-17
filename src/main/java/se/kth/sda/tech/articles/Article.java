package se.kth.sda.tech.articles;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import se.kth.sda.tech.comments.Comment;
import se.kth.sda.tech.reactions.Reaction;
import se.kth.sda.tech.topics.Topic;

import javax.persistence.*;
import java.util.List;

@Entity
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String body;

    private String authorName;

    @OneToMany
    private List<Comment> comments;

    @ManyToMany
    private List<Topic> topics;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "reaction_id", referencedColumnName = "id")
    private Reaction reaction;

    public Article() {
        reaction = new Reaction();
    }

    public Article(Long id, String title, String body, String authorName, Reaction reaction) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.authorName = authorName;
        this.reaction = reaction;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public List<Topic> getTopics() {
        return topics;
    }

    public void setTopics(List<Topic> topics) {
        this.topics = topics;
    }

    public Reaction getReaction() {
        return reaction;
    }

    public void setReaction(Reaction articleReaction) {
        this.reaction = articleReaction;
    }
}

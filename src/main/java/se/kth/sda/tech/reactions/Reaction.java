package se.kth.sda.tech.reactions;

import se.kth.sda.tech.articles.Article;
import se.kth.sda.tech.comments.Comment;

import javax.persistence.*;

@Entity
public class Reaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer numLike;
    private Integer numDislike;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "reaction")
    private Article article;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "reaction")
    private Comment comment;

    public Reaction() {
        this.numLike = 0;
        this.numDislike = 0;
    }

    public Reaction(Long id, Integer numLike, Integer numDislike) {
        this.id = id;
        this.numLike = numLike;
        this.numDislike = numDislike;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getNumLike() {
        return numLike;
    }

    public void setNumLike(Integer like) {
        this.numLike = like;
    }

    public Integer getNumDislike() {
        return numDislike;
    }

    public void setNumDislike(Integer dislike) {
        this.numDislike = dislike;
    }
}

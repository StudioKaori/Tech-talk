package se.kth.sda.tech.model;

import org.springframework.data.domain.Sort;

public class ModelSort {

    static public Sort getSortByReaction(String sort, String sortmode) throws IllegalArgumentException {
        // Throw error for invalid key
        if (!sort.equals("like") && !sort.equals("dislike")) {
            throw new IllegalArgumentException("The sort word is invalid");
        }

        if (!sortmode.equals("asc") && !sortmode.equals("desc")) {
            throw new IllegalArgumentException("The sort mode is invalid");
        }

        Sort.Direction sortDirection = sortmode.equals("asc") ? Sort.Direction.ASC : Sort.Direction.DESC;
        String sortKey = sort.equals("like") ? "reaction.numLike" : "reaction.numDislike";

        return Sort.by(sortDirection, sortKey);
    }
}

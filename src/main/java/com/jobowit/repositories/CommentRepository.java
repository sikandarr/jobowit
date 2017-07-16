package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.jobowit.domain.Comment;

@RepositoryRestResource
public interface CommentRepository extends PagingAndSortingRepository<Comment, Integer>
{

}

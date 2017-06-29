package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.jobowit.domain.Comment;
import com.jobowit.domain.projections.CommentProjection;

@RepositoryRestResource(excerptProjection = CommentProjection.class)
public interface CommentRepository extends PagingAndSortingRepository<Comment, Integer>
{

}

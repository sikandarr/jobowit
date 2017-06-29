package com.jobowit.domain.projections;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;

import com.jobowit.domain.Comment;

@Projection(name = "commentProjection", types = { Comment.class })
public interface CommentProjection
{
	@Value("#{target.commentDtm.toString()}")
	String getCommentDtm();
	
	String getComment();
	
	@Value("#{target.job != null ? target.job.getJobId():null}")
	String getJob();
	
	@Value("#{target.staff.getName()}")
	String getUser();
	
	@Value("#{target.party != null ? target.party.getName():''}")
	String getParty();
}

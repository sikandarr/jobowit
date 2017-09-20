package com.jobowit.domain;

import java.io.Serializable;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.jobowit.domain.access.JobowitUser;
import lombok.Data;

@Entity
@Table(name = "staff")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "staffId")
@Data
public class Staff implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "staff_id", unique = true, nullable = false)
	private int staffId;

	@Column(name = "create_dtm", insertable = false, updatable = false)
	private Timestamp createdDtm;

	@Column(length = 255)
	private String email;

	@Column(length = 100)
	private String name;

	private String initials;

	private String bgColor;

	@OneToMany(mappedBy = "staff")
	private List<ExtraAvailability> extraAvailabilities;

	@OneToMany(mappedBy = "staff")
	private List<JobSchedule> jobSchedules;

	@OneToMany(mappedBy = "staff")
	private List<NonAvailability> nonAvailabilities;

	@OneToMany(mappedBy = "staff")
	private List<RecurringAvailability> recurringAvailabilities;

	@OneToOne(optional = true, cascade = CascadeType.ALL)
	@JoinColumn(name = "address_id")
	private Address address;

	@OneToMany(mappedBy = "staff")
	private List<StaffRole> staffRoles;

	@OneToOne(optional = true, cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id", nullable = true)
	private JobowitUser user;

	@Column(name = "staff_uuid", updatable = false)
	private String uuid;

	public String[] getJobRoles()
	{
		String[] roles = new String[this.getStaffRoles().size()];
		for (int i = 0; i < roles.length; i++)
		{
			roles[i] = this.getStaffRoles().get(i).getRoleName();
		}
		return roles;
	}

	public boolean isAvailableBetween(LocalDateTime startDtm, LocalDateTime finishDtm)
	{
		for (NonAvailability na : this.getNonAvailabilities())
			if (!na.isAvailableBetween(startDtm, finishDtm))
				return false;

		boolean isAvailable = false;
		for (RecurringAvailability ra : this.getRecurringAvailabilities())
			if (ra.isAvailableBetween(startDtm, finishDtm))
			{
				isAvailable = true;
				break;
			}

		if (!isAvailable)
			for (ExtraAvailability ea : this.getExtraAvailabilities())
			{
				if (ea.isAvailableBetween(startDtm, finishDtm))
				{
					isAvailable = true;
					break;
				}
			}

		if (isAvailable)
			for (JobSchedule s : this.getJobSchedules())
				if (!s.isPast())
					if (s.hasConflict(startDtm, finishDtm))
						return false;

		return isAvailable;
	}

}
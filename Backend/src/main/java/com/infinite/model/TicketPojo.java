package com.infinite.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class TicketPojo {

	@Id
	@GeneratedValue
	private Long id;
	private String username;
	private String email;
	private String issue;

	public TicketPojo() {
		super();
	}

	public TicketPojo(Long id, String username, String email, String issue) {
		//super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.issue = issue;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getIssue() {
		return issue;
	}

	public void setIssue(String issue) {
		this.issue = issue;
	}

}

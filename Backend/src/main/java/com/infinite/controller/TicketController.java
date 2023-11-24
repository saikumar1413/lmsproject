package com.infinite.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infinite.exceptions.UserNotFoundException;
import com.infinite.model.TicketPojo;
import com.infinite.repository.TicketRepo;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("tic/a1")
public class TicketController {

	@Autowired
	private TicketRepo ticrepo;

	@PostMapping(path = "/ticket")
	TicketPojo newUser(@RequestBody TicketPojo newUser) {
		return ticrepo.save(newUser);
	}

	@GetMapping("/tickets")
	List<TicketPojo> getAllUsers() {
		return ticrepo.findAll();
	}

	@GetMapping("/ticket/{id}")
	TicketPojo getUserById(@PathVariable Long id) {
		return ticrepo.findById(id).orElseThrow(() -> new UserNotFoundException(id));
	}

	@PutMapping("/ticket/{id}")
	TicketPojo updateUser(@RequestBody TicketPojo newUser, @PathVariable Long id) {
		return ticrepo.findById(id).map(user -> {
			user.setUsername(newUser.getUsername());
			user.setEmail(newUser.getEmail());
			user.setIssue(newUser.getIssue());
			return ticrepo.save(user);
		}).orElseThrow(() -> new UserNotFoundException(id));
	}
}

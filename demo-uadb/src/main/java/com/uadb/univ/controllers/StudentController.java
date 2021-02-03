package com.uadb.univ.controllers;

import java.util.List;
import java.util.Optional;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uadb.univ.entities.Stade;
import com.uadb.univ.repositories.StudentRepository;

@RestController
@RequestMapping("/student")

public class StudentController {
	
	@Resource
	private StudentRepository sdtr;
	
	@GetMapping ("/findById/{id}")
	public Optional<Stade> findOne(@PathVariable Long id) {
		return sdtr.findById(id);
		
	}
	@GetMapping ("/findAll")
	public List<Stade> findAll() {
		return sdtr.findAll();
		
	}
	@PostMapping("/create")
	public Stade save(@RequestBody Stade student) {
		return sdtr.save(student);
		
	}
	@PostMapping("/update")
	public Stade update(@RequestBody Stade student) {
		return sdtr.save(student);
		
	}
	@PostMapping("/delete")
	public void delete(@RequestBody Stade student) {
		sdtr.delete(student);
		
	}

}

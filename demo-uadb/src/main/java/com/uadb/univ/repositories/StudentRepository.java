package com.uadb.univ.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.uadb.univ.entities.Stade;

public interface StudentRepository extends JpaRepository<Stade, Long> {
	

}

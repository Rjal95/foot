package com.uadb.univ.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

import com.uadb.univ.utils.AbstractPersistent;
import com.uadb.univ.utils.Gender;

@Entity
@Table(name="students")
public class Stade extends AbstractPersistent {
	
	
	@Column(name="first_name")	//declared as column
	private String firstName;
	
	@Column(name="last_name", length=50)	//declared as column with max length=50
	private String lastName;
	
	private String address;
	
	@Enumerated(EnumType.STRING) //declared as enumered type
	private Gender gender;

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}
	
	

}

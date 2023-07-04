package com.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.model.Customer;

@Service
public class CustomerDAO {

	@Autowired
	private CustomerRepo customerRepo;

	public Customer registerCustomer(Customer customer) {
		BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
		String encryptPassword = bcrypt.encode(customer.getPassword());
		customer.setPassword(encryptPassword);
		return customerRepo.save(customer);
	}

	public List<Customer> getAllCustomers() {

		return customerRepo.findAll();
	}

	public Optional<Customer> getCustomerById(Integer id) {

		return customerRepo.findById(id);

	}

	public void deleteCustomerById(Integer id) {
		customerRepo.deleteById(id);
	}

	public Customer updateCustomer(Customer customer) {
		Integer customerId = customer.getId();
		Customer cust = customerRepo.findById(customerId).get();
		cust.setName(customer.getName());
		cust.setPhoneNumber(customer.getPhoneNumber());
		cust.setAddress(customer.getAddress());
		cust.setEmailId(customer.getEmailId());
		cust.setPassword(customer.getPassword());

		return customerRepo.save(cust);

	}

	public Customer findByEmailId(String email) {
		return customerRepo.findByEmailId(email);

	}

	public Customer fetchUserByEmailIdAndPassword(String email, String password) {
		

		return customerRepo.findByEmailIdAndPassword(email, password);
	}

}

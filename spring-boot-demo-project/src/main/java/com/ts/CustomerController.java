package com.ts;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dao.CustomerDAO;
import com.dao.EmailService;
import com.model.Customer;

@RestController
@CrossOrigin(allowedHeaders = "*", origins = "*")
public class CustomerController {

	@Autowired
	private CustomerDAO customerDao;
	@Autowired
	EmailService emailService;

	@PostMapping("/registerCustomer")
	public Customer registerCustomer(@RequestBody Customer customer) throws Exception {
		

		String tempEmailId = customer.getEmailId();
		if (tempEmailId != null && !"".equals(tempEmailId)) {
			Customer custObj = customerDao.findByEmailId(tempEmailId);
			if (custObj != null) {
				throw new Exception("User with " + tempEmailId + "is already exits");
			}
		}
		Customer custObj = null;
		custObj = customerDao.registerCustomer(customer);
		System.out.println(customer.getEmailId());
		String status = emailService.sendSimpleMail(customer.getEmailId(),
				"Welcome to Garage Genius...Thanks for being a apart of Garage Genius family...This is where best thing happens to your vehicles..",
				"Registration to Garage Genius");
		if (status != null) {
			System.out.println("EMail Send successfully...");
		}
		return custObj;
	}

	@GetMapping("/getAllCustomers")
	public List<Customer> getAllCustomers() {
		return customerDao.getAllCustomers();
	}

	@GetMapping("/getCustomerById")
	public Optional<Customer> getCustomerById(@RequestParam Integer id) {
		return customerDao.getCustomerById(id);
	}

	@DeleteMapping("/deleteCustomerById")
	public void deleteCustomerById(@RequestParam Integer id) {
		customerDao.deleteCustomerById(id);

	}

	@PutMapping("/updateCustomer")
	public Customer updateCustomer(@RequestBody Customer customer) {
		return customerDao.updateCustomer(customer);
	}



//	@PostMapping("/login")
//	public Customer loginCustomer(@RequestBody Customer customer) throws Exception {
//		
//		
//		String EmailId = customer.getEmailId();
//		String Password = customer.getPassword();
//		Customer customer1 = null;
//		if (EmailId != null && Password != null ) {
//			
//			customer1 = customerDao.fetchUserByEmailIdAndPassword(EmailId, Password);
//
//		}
//		if (customer1 == null) {
//			throw new Exception("Bad Credentials");
//		}
//
//
//	    
//		
//		
//		return customer1;
//	
//	}
	
	@PostMapping("/login")
	public Customer loginCustomer(@RequestBody Customer customer) throws Exception {
	    String email = customer.getEmailId();
	    String password = customer.getPassword();
	    Customer authenticatedCustomer = null;

	    if (email != null && password != null) {
	       
	        Customer customerFromDb = customerDao.findByEmailId(email);

	        if (customerFromDb != null) {
	            BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
	           
	            if (bcrypt.matches(password, customerFromDb.getPassword())) {
	                authenticatedCustomer = customerFromDb;
	            }
	        }
	    }

	    if (authenticatedCustomer == null) {
	        throw new Exception("Invalid credentials");
	    }

	    return authenticatedCustomer;
	}

	
	



}

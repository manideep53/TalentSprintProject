package com.ts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dao.CarWashProductsDAO;
import com.model.CarWashProducts;

@RestController
@CrossOrigin(allowedHeaders = "*", origins = "*")
public class CarWashProductsController {
	
	@Autowired
	private CarWashProductsDAO carWashProductsDao;

	@PostMapping("/registerCarWashProducts")
	public CarWashProducts registerCarWashProducts(@RequestBody CarWashProducts carWashProducts)  {
	
		 return carWashProductsDao.registerCarWashProducts(carWashProducts);
		  
		  
		 
	}

	@GetMapping("/getAllCarWashProducts")
	public List<CarWashProducts> getAllCarWashProducts() {
		return carWashProductsDao.getAllCarWashProducts();
	}

	@DeleteMapping("/deleteCarWashProductsById")
	public void deleteCarWashProductsById(@RequestParam Integer id) {
		carWashProductsDao.deleteCarWashProductsById(id);

	}

}

package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.CarWashProducts;


@Service
public class CarWashProductsDAO {

	@Autowired
	 private CarWashProductsRepo carWashProductsRepo;
	
	public  CarWashProducts registerCarWashProducts(CarWashProducts carWashProducts) {
		  return carWashProductsRepo.save(carWashProducts);
	}

	public List<CarWashProducts> getAllCarWashProducts() {
		
		return carWashProductsRepo.findAll();
	}

	public void deleteCarWashProductsById(Integer id) {
		carWashProductsRepo.deleteById(id);
	}
}
